import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectIngredient: []
}

const selectIngredientSlice = createSlice({
    name: 'selectIngredient',
    initialState,
    reducers: {
        selectIngredient: (state, action) => {
            state.selectIngredient = action.payload
        }
    }
})

export const { selectIngredient } = selectIngredientSlice.actions;
export default selectIngredientSlice.reducer;