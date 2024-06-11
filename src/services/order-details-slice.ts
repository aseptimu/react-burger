import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {orderCheckoutRequest} from "../utils/api";

export const orderCheckout = createAsyncThunk(
    'order/checkout',
    orderCheckoutRequest
)

export type TOrder = {
    readonly number: string | null;
    readonly isOrderInProgress: boolean;
}

export const initialState: TOrder = {
    number: null,
    isOrderInProgress: false,
}

const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(orderCheckout.pending, (state) => {
            state.number = null;
            state.isOrderInProgress = true;
        })
        builder.addCase(orderCheckout.fulfilled, (state, action) => {
            state.number = action.payload?.number;
            state.isOrderInProgress = false;
        })
        builder.addCase(orderCheckout.rejected, (state, action) => {
            state.number = null;
            state.number = 'Error';
            state.isOrderInProgress = false;
            console.error("Error fetching ingredients\n", action.payload)
        })
    }
})

export default orderDetailsSlice.reducer;