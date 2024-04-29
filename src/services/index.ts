import {configureStore} from "@reduxjs/toolkit";
import constructorSlice from "./constructor-slice";
import ingredientsSlice from "./ingredients-slice";
import orderDetailsSlice from "./order-details-slice";
import userSlice from "./user-slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        burgerConstructor: constructorSlice,
        ingredients: ingredientsSlice,
        orderDetails: orderDetailsSlice,
        user: userSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>