import {Middleware, MiddlewareAPI} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "../index";
import {TWSActions} from "./types";
import {setFeed} from "../feed-slice";

export const socketMiddleware = (actions: TWSActions): Middleware => {
    let socket: WebSocket | null = null;

    return (store: MiddlewareAPI<AppDispatch, RootState>) => {
        return next => action => {
            const {dispatch} = store;

            if (actions.wsConnect.match(action)) {
                if (socket !== null) {
                    socket.close();
                }
                socket = new WebSocket(action.payload.url);
                socket.onmessage = (event: MessageEvent<string>) => {
                    dispatch(setFeed(event.data));
                }
                socket.onopen = () => {
                    dispatch(setFeed('{}'));
                    console.info('Websocket opened');
                }
                socket.onclose = () => {
                    console.info('Websocket closed');
                }
            } else if (actions.wsDisconnect.match(action)) {
                if (socket !== null) {
                    socket.close();
                }
            }

            next(action);
        }
    }
}