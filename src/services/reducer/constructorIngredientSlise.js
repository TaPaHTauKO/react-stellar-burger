import { createSlice } from "@reduxjs/toolkit"
import uuid from "react-uuid"

const initialState = {
    ingredientInBurger: []
}

const constructorIngredientSlise = createSlice({
    name: 'ingredientInBurger',
    initialState,
    reducers: {
        addIngredient:{
            reducer: (state,action) => {
                const foundBun = state.ingredientInBurger.findIndex(item => (item.type === 'bun') && (item.type === action.payload.type))
            if (foundBun >= 0) {
                state.ingredientInBurger.splice(foundBun, 1, action.payload)

            } else {
                state.ingredientInBurger = [...state.ingredientInBurger, action.payload];
            }
            },
            prepare: (el) => {
                const unicId = uuid()
                return { payload: {...el, unicId} }
            }
        },

        deleteIngredient: (state, action) => {
            state.ingredientInBurger =
                state.ingredientInBurger.filter(
                    (item) => item.unicId !== action.payload)
        },

        sortIngredients: (state, action) => {
            state.ingredientInBurger = action.payload;
        }

    }
})

export const { addIngredient, deleteIngredient, sortIngredients } = constructorIngredientSlise.actions;
export default constructorIngredientSlise.reducer;
