import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    ingredientInBurger: []
}

const constructorIngredientSlise = createSlice({
    name: 'ingredientInBurger',
    initialState,
    reducers: {
        addIngredient: (state, action) => {
            const foundBun = state.ingredientInBurger.findIndex(item => (item.type === 'bun') && (item.type === action.payload.type))
            if (foundBun >= 0) {
                state.ingredientInBurger.splice(foundBun, 1, action.payload)

            } else {
                state.ingredientInBurger = [...state.ingredientInBurger, action.payload];
            }
        },

        deleteIngredient: (state, action) => {
            state.ingredientInBurger =
                state.ingredientInBurger.filter(
                    (item) => item.unicId !== action.payload.unicId)
        },

        sortIngredients: (state, action) => {
            state.ingredientInBurger = action.payload;
        }

    }
})

export const { addIngredient, deleteIngredient, sortIngredients } = constructorIngredientSlise.actions;
export default constructorIngredientSlise.reducer;
