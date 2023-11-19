import { createSlice } from "@reduxjs/toolkit"
import { fetchIngredientData } from "./ingredientDataQuery";
import { TIngredient } from "../types";


type SliceState = {
    ingredientData: Array<TIngredient> | null,
    isLoading: boolean,
    error: string | unknown
}

 export const initialState: SliceState = {
    ingredientData: null,
    isLoading: false,
    error: '',
   
}

const ingredientDataSlice = createSlice({
    name: 'indgredientData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredientData.fulfilled, (state, action) => {
                state.ingredientData = action.payload
                state.isLoading = false;
                state.error = '';
            })
            .addCase(fetchIngredientData.pending, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchIngredientData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }

})


export default ingredientDataSlice.reducer;
