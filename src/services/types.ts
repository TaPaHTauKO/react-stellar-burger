import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "./index";
import { createAsyncThunk } from "@reduxjs/toolkit";


export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
    getState: () => RootState;
    dispatch: AppDispatch;

}>

export type TIngredient = {
    _id: string
    name: string
    type: string
    proteins: number
    fat: number
    carbohydrates: number
    calories: number
    price: number
    image: string
    image_mobile: string
    image_large: string
    __v: number
    unicId?: undefined | string
}

export type TUser = {
    name: string
    email: string
}

export enum WebsocketStatus {
    CONNECTING = 'CONNECTING...',
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE'
}

export interface INumberOfIngredients {
    ingredients: string
}

export interface IOrders {
    ingredients: string[],
    _id: string,
    status: string,
    number: number,
    createdAt: string,
    updatedAt: string,
    name: string
}

export interface OrderRow {
    success: boolean,
    orders: Array<IOrders>
    total: number,
    totalToday: number
}

export type LiveOrder = OrderRow | null;

// export enum LiveOrderActionType {
//     DATA = 'data',
//     INSERT = 'insert',
//     DELETE = 'delete',
//     UPDATE = 'update',
//     MOVE = 'move',
// }

// export type Data = {
//     type: LiveOrderActionType.DATA,
//     data: LiveOrder
// }

// export type Insert = {
//     type: LiveOrderActionType.INSERT,
//     data: LiveOrder
// }

// export type Update = {
//     type: LiveOrderActionType.UPDATE,
//     data: LiveOrder
// }

// export type Delete = {
//     type: LiveOrderActionType.DELETE,
//     data: LiveOrder
// }

// export type Move = {
//     type: LiveOrderActionType.MOVE,
//     data: LiveOrder
// }

// export type LiveOrderAction = Insert | Data | Delete | Update | Move;

// export type LiveOrderActions = Array<LiveOrderAction>;