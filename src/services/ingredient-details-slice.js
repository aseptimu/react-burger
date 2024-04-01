import {createSlice} from "@reduxjs/toolkit";

const ingredientDetailsSlice = createSlice({
    name: 'ingredientDetails',
    initialState: {},
    reducers: {
        setIngredient: (_, action) => {
            return {...action.payload}
        },
        removeIngredient: () => {
            return {}
        }
    }
})

export default ingredientDetailsSlice.reducer;
export const {setIngredient, removeIngredient} = ingredientDetailsSlice.actions;