import {request} from "./network-operations";
import {AUTH, BASE_URL, PASSWORD_RESET} from "./constants";

export const fetchIngredientsRequest = async () => {
    const response = await request(BASE_URL + '/ingredients', {});
    return response.data;
};

export const orderCheckoutRequest = async (order) => {
    const response = await fetchWithRefresh(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            ingredients: order
        })
    })
    return response.order;
};

export const forgotPasswordRequest = async (email) => {
    return await request(BASE_URL + PASSWORD_RESET, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            email
        })
    });
};

export const resetPasswordRequest = async (newPassword, resetCode) => {
    return await request(BASE_URL + PASSWORD_RESET, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            password: newPassword,
            token: resetCode
        })
    });
};

export const registerRequest = async({email, password, name}) => {
    return await fetchWithRefresh(BASE_URL + AUTH + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            email,
            password,
            name
        })
    });
}

/**
 * Эндпоинт для авторизации
 * @param email
 * @param password
 * @returns {Promise<Object>}
 */
export const loginRequest = async({email, password}) => {
    return await fetchWithRefresh(BASE_URL + AUTH + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
}

/**
 * Эндпоинт для выхода из системы
 * @param refreshToken
 * @returns {Promise<Object>}
 */
export const logoutRequest = async(refreshToken) => {
    return await request(BASE_URL + AUTH + '/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            token: refreshToken
        })
    });
}

/**
 * Эндпоинт получения данных о пользователе
 * @returns {Promise<Object>}
 */
export const fetchUserRequest = async () => {
    return await request(BASE_URL + AUTH + '/user', {
        headers: {
            'authorization': localStorage.getItem('accessToken')
        }
    });
};

/**
 * Эндпоинт обновления данных о пользователе
 * @returns {Promise<Object>}
 */
export const updateUserRequest = async({email, password, name}) => {
    return await fetchWithRefresh(BASE_URL + AUTH + '/user', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': localStorage.getItem('accessToken')
        },
        body: JSON.stringify({
            email,
            password,
            name
        })
    });
}

const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const refreshToken = () => {
    return fetch(`${BASE_URL}/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    }).then(checkReponse);
};

export const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await checkReponse(res);
    } catch (err) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken(); //обновляем токен
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options); //повторяем запрос
            return await checkReponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};