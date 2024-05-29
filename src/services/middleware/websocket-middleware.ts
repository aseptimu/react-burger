import {Middleware, MiddlewareAPI} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "../index";
import {TWSActions} from "./types";
import {WS_CONNECTION_START} from "./actions";
import {setFeed} from "../feed-slice";

export const socketMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;
        return next => (action: TWSActions) => {
            const {type} = action;
            const {dispatch} = store;

            if (type === WS_CONNECTION_START) {
                socket = new WebSocket(wsUrl);
            }
            if (socket) {
                socket.onmessage = event => {
                    dispatch(setFeed(event.data))
                };
            }


            next(action);
        }
    }) as Middleware;

}