import {configureStore} from "@reduxjs/toolkit";
import constructorSlice from "./constructor-slice";
import ingredientsSlice from "./ingredients-slice";
import orderDetailsSlice from "./order-details-slice";
import ingredientDetailsSlice from "./ingredient-details-slice";

export const store = configureStore({
    reducer: {
        burgerConstructor: constructorSlice,
        ingredients: ingredientsSlice,
        orderDetails: orderDetailsSlice,
        ingredientDetails: ingredientDetailsSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
})