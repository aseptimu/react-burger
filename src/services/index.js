import {configureStore} from "@reduxjs/toolkit";
import constructorSlice from "./constructor-slice";
import ingredientsSlice from "./ingredients-slice";
import orderDetailsSlice from "./order-details-slice";
import userSlice from "./user-slice";

export const store = configureStore({
    reducer: {
        burgerConstructor: constructorSlice,
        ingredients: ingredientsSlice,
        orderDetails: orderDetailsSlice,
        user: userSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
})