import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {request} from "../utils/network-operations";
import {BASE_URL} from "../utils/constants";

export const fetchIngredients = createAsyncThunk(
    'ingredients/fetch',
    async () => {
        const response = await request(`${BASE_URL}/ingredients`);
        return response.data;
    }
);

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        ingredients: []
    },
    reducers: {
        incrementIngredientCounter: (state, action) => {
            const ingredient = state.ingredients.find((element) => element._id === action.payload)
            ++ingredient.__v;
        },
        decrementIngredientCounter: (state, action) => {
            const ingredient = state.ingredients.find((element) => element._id === action.payload)
            --ingredient.__v;
        },
        dropIngredientsCounter: (state) => {
            state.ingredients.forEach(element => element.__v = 0);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchIngredients.pending, () => {
            console.info("Pending...")
        })
        builder.addCase(fetchIngredients.fulfilled, (state, action) => {
            state.ingredients = action.payload;
        })
        builder.addCase(fetchIngredients.rejected, (state, action) => {
            state.ingredients = state.initialState;
            console.error("Error fetching ingredients\n", action.error.stack)
        })
    }
})

export default ingredientsSlice.reducer
export const {
    incrementIngredientCounter,
    decrementIngredientCounter,
    dropIngredientsCounter
} = ingredientsSlice.actions

