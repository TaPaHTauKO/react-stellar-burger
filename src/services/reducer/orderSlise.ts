import { createSlice, isAction } from "@reduxjs/toolkit"
import { postOrderQuery } from "./orderQuery";
import { TIngredient } from "../types";

type SliseState = {
    order: Array<TIngredient>,
    orderNumber: string,
    isLoading: boolean,
    error: string | unknown
    
}


const initialState: SliseState = {
    order: [],
    orderNumber: '',
    isLoading: false,
    error: ''
}

const orderSlise = createSlice({
    name: 'order',
    initialState,
    reducers: {
        saveOrder: (state, action) => {
            state.orderNumber = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(postOrderQuery.pending, (state) => {
            state.isLoading = true;
            state.error = ''; 
        })
        .addCase(postOrderQuery.fulfilled, (state, action) => {
            state.orderNumber = action.payload?.order?.number;
            state.isLoading = false;
            state.error = '';  
        })
        .addCase(postOrderQuery.rejected,(state, action) => {
            debugger
            state.isLoading = false;
            state.error = action.payload;
        })
    }    
})

export const {saveOrder} = orderSlise.actions;
export default orderSlise.reducer;