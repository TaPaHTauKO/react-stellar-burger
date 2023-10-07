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
    extraReducers:{
        [fetchIngredientData.fulfilled.type]:(state, action) => {
            state.ingredientData = action.payload
            state.isLoading = false;
            state.error = '';  
        },
        [fetchIngredientData.pending.type]:(state) => {
            state.isLoading = true;
            state.error = ''; 
        },
        [fetchIngredientData.rejected.type]:(state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {ingredientDataUploading, ingredientDataUpload, ingredientDataError} = ingredientDataSlice.actions;
export default ingredientDataSlice.reducer;
