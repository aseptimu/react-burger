import {createSlice} from "@reduxjs/toolkit";

const constructorSlice = createSlice({
    name: 'constructor',
    initialState: {
        bun: null,
        ingredients: [],
        total: 0
    },
    reducers: {
        setBun: (state, action) => {
            state.bun = action.payload;
        },
        setIngredient: (state, action) => {
            state.ingredients.push(action.payload);
        },
        setIngredients: (state, action) => {
            state.ingredients = action.payload;
        },
        removeIngredient: (state, action) => {
            state.ingredients.filter((element) => element._id !== action.payload);
        },
        setTotal: (state, action) => {
            state.total = action.payload;
        },
    },

})

export const {
    setBun,
    setIngredient,
    setIngredients,
    removeIngredient,
    setTotal
} = constructorSlice.actions;
export default constructorSlice.reducer;