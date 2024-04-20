import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchIngredientsRequest} from "../utils/api";

export const fetchIngredients = createAsyncThunk(
    'ingredients/fetch',
    fetchIngredientsRequest
);

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        ingredients: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchIngredients.pending, () => {
            console.info("Pending...")
        });
        builder.addCase(fetchIngredients.fulfilled, (state, action) => {
            state.ingredients = action.payload;
        });
        builder.addCase(fetchIngredients.rejected, (state, action) => {
            state.ingredients = state.initialState;
            console.error("Error fetching ingredients\n", action.error.stack)
        });
    }
});

export default ingredientsSlice.reducer
