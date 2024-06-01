import {configureStore} from "@reduxjs/toolkit";
import constructorSlice from "./constructor-slice";
import ingredientsSlice from "./ingredients-slice";
import orderDetailsSlice from "./order-details-slice";
import userSlice from "./user-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {socketMiddleware} from "./middleware/websocket-middleware";
import feedSlice from "./feed-slice";
import {feedWsConnect, feedWsDisconnect, ordersWsConnect, ordersWsDisconnect} from "./middleware/actions";

const feedSocketMiddleware = socketMiddleware({
    wsConnect: feedWsConnect,
    wsDisconnect: feedWsDisconnect,
});

const ordersSocketMiddleware = socketMiddleware({
    wsConnect: ordersWsConnect,
    wsDisconnect: ordersWsDisconnect,
});
export const store = configureStore({
    reducer: {
        burgerConstructor: constructorSlice,
        ingredients: ingredientsSlice,
        orderDetails: orderDetailsSlice,
        user: userSlice,
        feed: feedSlice,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(
            feedSocketMiddleware,
            ordersSocketMiddleware
        );
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

