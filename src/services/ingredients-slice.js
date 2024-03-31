import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {request} from "../utils/network-operations";
import {BASE_URL} from "../utils/constants";

export const fetchIngredients = createAsyncThunk(
    'ingredients/fetch',
    async (_, {rejectWithValue}) => {
        try {
            const response = await request(`${BASE_URL}/ingredients`);
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue({ message: error.response.data, status: error.response.status });
        }
    }
);


const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        ingredients: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchIngredients.fulfilled, (state, action) => {
            state.ingredients = action.payload;
        })
    }
})

export default ingredientsSlice.reducer

