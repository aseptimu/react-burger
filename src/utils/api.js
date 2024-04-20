import {request} from "./network-operations";
import {AUTH, BASE_URL, PASSWORD_RESET} from "./constants";

export const fetchIngredientsRequest = async () => {
    const response = await request(BASE_URL + '/ingredients', {});
    return response.data;
};

export const orderCheckoutRequest = async (order) => {
    const response = await request(`${BASE_URL}/orders`, {
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
    return await request(BASE_URL + PASSWORD_RESET + '/reset', {
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
    return await request(BASE_URL + AUTH + '/register', {
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
    return await request(BASE_URL + AUTH + '/login', {
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
 * Эндпоинт получения токена
 * @param refreshToken
 * @returns {Promise<Object>}
 */
export const tokensRequest = async(refreshToken) => {
    return await request(BASE_URL + AUTH + '/token', {
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
export const updateUserRequest = async() => {
    return await request(BASE_URL + AUTH + '/user', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'authorization': localStorage.getItem('accessToken')
        },
        body: JSON.stringify({
            // email,
            // password,
            // name
        })
    });
}

export const fetchWithRefresh = async() => {

}