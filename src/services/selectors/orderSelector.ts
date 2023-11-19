import { RootState } from "..";


export const orderSelectorNumber = (store: RootState) => store.order.orderNumber

export const orderIngredientsOrders = (store: RootState) => store.order.ingredientsNumbers
