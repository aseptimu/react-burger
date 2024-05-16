/**
 * Осуществляет HTTP запрос по указанному URL с заданными опциями и проверяет ответ.
 * Использует глобальный метод fetch для совершения запроса и функцию checkResponse для проверки ответа.
 *
 * @param {string} url URL адрес, по которому будет совершен запрос.
 * @param {Object} options Объект опций для настройки запроса. Включает метод, заголовки и тело запроса.
 * @returns {Promise<Object>} Промис, разрешающийся в данные ответа в формате JSON после их успешной проверки.
 * @throws {Error} Исключение, если ответ от сервера содержит ошибку, с информацией о статусе и тексте ошибки.
 */
export function request(url: string, options: RequestInit) {
    return fetch(url, options).then(checkResponse)
}

/**
 * Проверяет ответ от сервера на наличие ошибок. Если ответ содержит ошибку,
 * генерируется исключение. В противном случае, ответ преобразуется в JSON.
 *
 * @param {Response} response Объект ответа от fetch запроса. Должен иметь свойства ok, status и statusText.
 * @returns {Promise<Object>} Промис, который разрешается с данными ответа в формате JSON.
 * @throws {Error} Исключение с текстом ошибки, если ответ от сервера содержит ошибку.
 * @example
 */
function checkResponse(response: Response) {
    if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }
    return response.json();
}