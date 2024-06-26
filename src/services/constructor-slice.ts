import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import {TIngredient, TIngredients} from "../utils/types";

export type TDragAndDropIndexes = {
    dragIndex: number;
    hoverIndex: number;
};

export type TDragAndDropIngredient = {
    ingredient: TIngredient;
    hoverIndex?: number;
}

export const initialState: TIngredients & {bun: TIngredient | null } = {
    bun: null,
    ingredients: [],
};

const constructorSlice = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        setBun: (state, action: PayloadAction<TIngredient>) => {
            state.bun = action.payload;
        },
        moveIngredient: (state, action: PayloadAction<TDragAndDropIndexes>) => {
            const { dragIndex, hoverIndex } = action.payload;
            console.log(action.payload)
            const dragIngredient = state.ingredients[dragIndex];
            state.ingredients.splice(dragIndex, 1);
            state.ingredients.splice(hoverIndex, 0, dragIngredient);
        },
        setIngredient: (state, action: PayloadAction<TDragAndDropIngredient>) => {
            const {ingredient, hoverIndex} = action.payload;
            state.ingredients.splice(hoverIndex ? hoverIndex : 0, 0, {...ingredient, nanoid: nanoid()});
        },
        removeIngredient: (state, action: PayloadAction<string | undefined>) => {
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