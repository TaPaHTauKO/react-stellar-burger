import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TIngredient } from "../types"
import { idGenerator } from "../../utils/utils"

type SliceState = {
    ingredientInBurger: Array<TIngredient>
}

const initialState: SliceState = {
    ingredientInBurger: []
}

const constructorIngredientSlise = createSlice({
    name: 'ingredientInBurger',
    initialState,
    reducers: {
        addIngredient:{
            reducer: (state,action: PayloadAction<TIngredient>) => {
                const foundBun = state.ingredientInBurger.findIndex(item => (item.type === 'bun') && (item.type === action.payload.type))
            if (foundBun >= 0) {
                state.ingredientInBurger.splice(foundBun, 1, action.payload)

            } else {
                state.ingredientInBurger = [...state.ingredientInBurger, action.payload];
            }
            },
            prepare: (el) => {
                const unicId = idGenerator()
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
        },

        clearIngredient: (state) => {
            state.ingredientInBurger = []
        }

    }
})

export const { addIngredient, deleteIngredient, sortIngredients, clearIngredient } = constructorIngredientSlise.actions;
export default constructorIngredientSlise.reducer;
