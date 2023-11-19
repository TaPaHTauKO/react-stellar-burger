import { createSlice } from "@reduxjs/toolkit"
import { TIngredient } from "../types"

type SliceState = {
    selectIngredient: TIngredient | null
}

 export const initialState: SliceState = {
    selectIngredient: null
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