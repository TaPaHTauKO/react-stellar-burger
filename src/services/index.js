import { configureStore } from "@reduxjs/toolkit";
import constructorIngredientReduser from "./reducer/constructorIngredientSlise";
import ingredientDataReduser from './reducer/ingredientDataSlice'
import  selectIngredientReduser  from "./reducer/selectIngredientSlice";
import  OrderReduser  from "./reducer/orderSlise";

const store = configureStore({
    reducer: {
        ingredientData: ingredientDataReduser,
        constructorIngredient: constructorIngredientReduser,
        selectIngredient: selectIngredientReduser,
        order: OrderReduser,
    }
});

export default store;