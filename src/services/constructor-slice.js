import {createSlice, nanoid} from "@reduxjs/toolkit";

const constructorSlice = createSlice({
    name: 'constructor',
    initialState: {
        bun: null,
        ingredients: [],
    },
    reducers: {
        setBun: (state, action) => {
            state.bun = action.payload;
        },
        moveIngredient: (state, action) => {
            const { dragIndex, hoverIndex } = action.payload;
            const dragIngredient = state.ingredients[dragIndex];
            state.ingredients.splice(dragIndex, 1);
            state.ingredients.splice(hoverIndex, 0, dragIngredient);
        },
        setIngredient: (state, action) => {
            const {ingredient, hoverIndex} = action.payload;
            state.ingredients.splice(hoverIndex, 0, {...ingredient, nanoid: nanoid()});
        },
        removeIngredient: (state, action) => {
            state.ingredients = state.ingredients.filter((element) => element.nanoid !== action.payload);
        },
        clearConstructor: (state) => {
            state.bun = null;
            state.ingredients = [];
        }
    },
})

export const {
    setBun,
    setIngredient,
    removeIngredient,
    moveIngredient,
    clearConstructor
} = constructorSlice.actions;
export default constructorSlice.reducer;