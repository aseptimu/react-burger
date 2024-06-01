import {feedWsConnect, feedWsDisconnect, ordersWsConnect, ordersWsDisconnect} from "./actions";

export type TWSInitConnectionPayload = {
    readonly url: string
}

export type TWSActions = {
    readonly wsConnect: typeof feedWsConnect | typeof ordersWsConnect;
    readonly wsDisconnect: typeof feedWsDisconnect | typeof ordersWsDisconnect;
}

export type TOrders = {
    "ingredients": ReadonlyArray<string>,
    "_id": string,
    "status": string,
    "number": number,
    "createdAt": string,
    "updatedAt": string
}

export type TOrdersInfo = {
    "success": boolean,
    "orders": ReadonlyArray<TOrders>,
    "total": number,
    "totalToday": number
}
