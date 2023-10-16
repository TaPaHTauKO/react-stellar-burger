import { createSlice } from "@reduxjs/toolkit"
import { fetchIngredientData } from "./ingredientDataQuery";
import uuid from "react-uuid";

const initialState = {
    ingredientData: [],
    isLoading: false,
    error: ''
}

const ingredientDataSlice = createSlice({
    name: 'indgredinetData',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredientData.fulfilled, (state, action) => {
                state.ingredientData = action.payload
                state.isLoading = false;
                state.error = '';
            })
            .addCase(fetchIngredientData.pending, (state, action) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(fetchIngredientData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }

})

export const { ingredientDataUploading, ingredientDataUpload, ingredientDataError } = ingredientDataSlice.actions;
export default ingredientDataSlice.reducer;
