import { createSlice } from "@reduxjs/toolkit"
import { postOrderQuery } from "./orderQuery";
import { IOrders, TIngredient } from "../types";
import { selectOrderQuery } from "./selectOrderQuery";

type SliseState = {
    order: Array<TIngredient> | null,
    orderNumber: string,
    isLoading: boolean,
    error: string | unknown,
    ingredientsNumbers: IOrders[]  | null 
}


export const initialState: SliseState = {
    order: null,
    orderNumber: '',
    isLoading: false,
    error: '',
    ingredientsNumbers: null
}

const orderSlise = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder(state,action) {
            state.orderNumber = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
        .addCase(postOrderQuery.pending, (state) => {
            state.orderNumber = ''
            state.isLoading = true;
            state.error = ''; 
        })
        .addCase(postOrderQuery.fulfilled, (state, action) => {
            state.orderNumber = action.payload?.order?.number;
            state.isLoading = false;
            state.error = '';  
        })
        .addCase(postOrderQuery.rejected,(state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(selectOrderQuery.pending, (state) => {
            state.isLoading = true;
            state.error = ''; 
        })
        .addCase(selectOrderQuery.fulfilled, (state, action) => {                               
            state.ingredientsNumbers = action.payload.orders
            state.isLoading = false;
            state.error = '';  
        })
        .addCase(selectOrderQuery.rejected,(state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }    
})

export const { setOrder } = orderSlise.actions;
export default orderSlise.reducer;