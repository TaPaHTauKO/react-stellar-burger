import { combineReducers } from "redux";


import constructorIngredientReduser from "./constructorIngredientSlise";
import ingredientDataReduser from './ingredientDataSlice'
import  selectIngredientReduser  from "./selectIngredientSlice";
import  OrderReduser  from "./orderSlise";
import UserReduser from "./userSlise"
import { liveOrderReducer } from "./orderFeedReduser";


const reducer = combineReducers({
    ingredientData: ingredientDataReduser,
    constructorIngredient: constructorIngredientReduser,
    selectIngredient: selectIngredientReduser,
    order: OrderReduser,
    user: UserReduser,
    liveOrderFeed: liveOrderReducer,
})

export default reducer;