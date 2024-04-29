import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {orderCheckoutRequest} from "../utils/api";

export const orderCheckout = createAsyncThunk(
    'order/checkout',
    orderCheckoutRequest
)

const initialState: {number: string | null} = {
    number: null,
}

const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(orderCheckout.pending, (state) => {
            state.number = null;
        })
        builder.addCase(orderCheckout.fulfilled, (state, action) => {
            state.number = action.payload?.number;
        })
        builder.addCase(orderCheckout.rejected, (state, action) => {
            state.number = null;
            state.number = 'Error';
            console.error("Error fetching ingredients\n", action.payload)
        })
    }
})

export default orderDetailsSlice.reducer;