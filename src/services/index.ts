import {configureStore} from "@reduxjs/toolkit";
import constructorSlice from "./constructor-slice";
import ingredientsSlice from "./ingredients-slice";
import orderDetailsSlice from "./order-details-slice";
import userSlice from "./user-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {socketMiddleware} from "./middleware/websocket-middleware";
import {WEBSOCKET_URL} from "../utils/constants";
import feedSlice from "./feed-slice";

export const store = configureStore({
    reducer: {
        burgerConstructor: constructorSlice,
        ingredients: ingredientsSlice,
        orderDetails: orderDetailsSlice,
        user: userSlice,
        feed: feedSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(socketMiddleware(WEBSOCKET_URL)),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>