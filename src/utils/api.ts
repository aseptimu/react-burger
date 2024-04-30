import {request} from "./network-operations";
import {AUTH, BASE_URL, PASSWORD_RESET} from "./constants";

type TRegisterData = {
    email: string;
    password: string;
    name: string;
};

type TLoginData = Omit<TRegisterData, 'name'>;

type TRefreshData = {
    success: boolean;
    refreshToken: string;
    accessToken: string;
}

export const fetchIngredientsRequest = async () => {
    const response = await request(BASE_URL + '/ingredients', {});
    return response.data;
};

export const orderCheckoutRequest = async (order: string[]) => {
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

export const forgotPasswordRequest = async (email: string) => {
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

export const resetPasswordRequest = async (newPassword: string, resetCode: string) => {
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

export const registerRequest = async({email, password, name}: TRegisterData) => {
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
export const loginRequest = async({email, password}: TLoginData) => {
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
export const logoutRequest = async(refreshToken: string) => {
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
    const accessToken = localStorage.getItem('accessToken');

    const headers: Record<string, string> = {
        'Content-Type': 'application/json;charset=utf-8'
    };
    if (accessToken) {
        headers['authorization'] = accessToken;
    }
    return await request(BASE_URL + AUTH + '/user', {
        headers
    });
};

/**
 * Эндпоинт обновления данных о пользователе
 * @returns {Promise<Object>}
 */
export const updateUserRequest = async({email, password, name}: TRegisterData) => {
    const accessToken = localStorage.getItem('accessToken');

    const headers: Record<string, string> = {
        'Content-Type': 'application/json;charset=utf-8'
    };
    if (accessToken) {
        headers['authorization'] = accessToken;
    }
    return await fetchWithRefresh(BASE_URL + AUTH + '/user', {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
            email,
            password,
            name
        })
    });
}

const checkReponse = (res: Response) => {
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

export const fetchWithRefresh = async (url: string, options: RequestInit) => {
    try {
        const res = await fetch(url, options);
        return await checkReponse(res);
    } catch (err: any) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken() as TRefreshData; //обновляем токен
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            if (options.headers) {
                (options.headers as Record<string, string>)['Authorization'] = refreshData.accessToken; // обновляем токен в заголовках
            }
            const res = await fetch(url, options); //повторяем запрос
            return await checkReponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};