import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchIngredientsRequest} from "../utils/api";
import {TIngredients} from "../utils/types";

export const initialState: TIngredients = {
    ingredients: [],
}

export const fetchIngredients = createAsyncThunk(
    'ingredients/fetch',
    fetchIngredientsRequest
);

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchIngredients.pending, () => {
            console.info("Pending...");
        });
        builder.addCase(fetchIngredients.fulfilled, (state, action) => {
            state.ingredients = action.payload;
        });
        builder.addCase(fetchIngredients.rejected, (state, action) => {
            console.error("Error fetching ingredients\n", action.error.stack)
            state.ingredients = initialState.ingredients;
        });
    }
});

export default ingredientsSlice.reducer
