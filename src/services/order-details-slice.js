import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {orderCheckoutRequest} from "../utils/api";


export const orderCheckout = createAsyncThunk(
    'order/checkout',
    orderCheckoutRequest
)

const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState: {
        number: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(orderCheckout.pending, (state) => {
            state.number = null;
        })
        builder.addCase(orderCheckout.fulfilled, (state, action) => {
            state.number = action.payload?.number;
        })
        builder.addCase(orderCheckout.rejected, (state, action) => {
            state.ingredients = state.initialState;
            state.number = 'Error';
            console.error("Error fetching ingredients\n", action.payload)
        })
    }
})

export default orderDetailsSlice.reducer;