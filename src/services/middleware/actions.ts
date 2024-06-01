import {createAction} from "@reduxjs/toolkit";
import {TWSInitConnectionPayload} from "./types";

export const feedWsConnect = createAction<TWSInitConnectionPayload>('feed/connect');
export const ordersWsConnect = createAction<TWSInitConnectionPayload>('orders/connect');
export const feedWsDisconnect = createAction('feed/disconnect');
export const ordersWsDisconnect = createAction('orders/disconnect');
