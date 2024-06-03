import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TOrders = {
    readonly createdAt: string;
    readonly ingredients: ReadonlyArray<string>;
    readonly name: string;
    readonly number: number;
    readonly status: string;
    readonly updatedAt: string;
    readonly _id: string;
}

export type TFeed = {
    readonly orders?: ReadonlyArray<TOrders>;
    readonly success?: boolean;
    readonly total?: number;
    readonly totalToday?: number;
}

const initialState:TFeed = {}

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        setFeed: (state, action: PayloadAction<string>) => {
            const data = JSON.parse(action.payload);
            state.orders = data.orders;
            state.success = data.success;
            state.total = data.total;
            state.totalToday = data.totalToday;
        }
    }
})

export const {
    setFeed
} = feedSlice.actions;

export default feedSlice.reducer;
