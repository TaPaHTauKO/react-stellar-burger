import { createSlice, isAction } from "@reduxjs/toolkit"
import { postOrderQuery } from "./orderQuery";


const initialState = {
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
    extraReducers:{
        [postOrderQuery.fulfilled.type]:(state, action) => {
            state.orderNumber = action.payload.order.number;
            state.isLoading = false;
            state.error = '';  
        },
        [postOrderQuery.pending.type]:(state) => {
            state.isLoading = true;
            state.error = ''; 
        },
        [postOrderQuery.rejected.type]:(state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {saveOrder} = orderSlise.actions;
export default orderSlise.reducer;