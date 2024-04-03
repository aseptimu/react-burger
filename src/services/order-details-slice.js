import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {request} from "../utils/network-operations";
import {BASE_URL} from "../utils/constants";


export const checkoutRequest = createAsyncThunk(
    'order/checkout',
    async (order, {rejectWithValue}) => {
        try {
            const response = await request(`${BASE_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    ingredients: order
                })
            })
            return response.order;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error);
        }
    }
)

const orderDetailsSlice = createSlice({
    name: 'orderDetails',
    initialState: {
        number: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(checkoutRequest.pending, (state) => {
            state.number = null;
        })
        builder.addCase(checkoutRequest.fulfilled, (state, action) => {
            state.number = action.payload?.number;
        })
        builder.addCase(checkoutRequest.rejected, (state) => {
            state.number = 'Error';
        })
    }
})

export default orderDetailsSlice.reducer;