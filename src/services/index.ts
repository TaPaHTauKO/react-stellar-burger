import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { socketMiddleware } from "./middleware/soket-middleware";
import rootReducer from './reducer/rootReduser';

import { TLiveOrderActions } from './reducer/orderFeedActions';
import type {} from 'redux-thunk/extend-redux'

import { 
    connect as LiveOrderWsConnect, 
    disconnect as LiveOrderWsDisconnect,
    wsConnecting as LiveOrderWsConnecting,
    wsOpen as LiveOrderWsOpen,
    wsClose as LiveOrderWsClose,
    wsMessage as LiveOrderWsNessage,
    wsError as LiveOrderWsError 
  } from "./reducer/orderFeedActions";

import { ThunkAction } from "redux-thunk/src";

const wsActions = {
    wsConnect: LiveOrderWsConnect,
    wsDisconnect: LiveOrderWsDisconnect,
    wsConnecting: LiveOrderWsConnecting,
    onOpen: LiveOrderWsOpen,
    onClose: LiveOrderWsClose,
    onError: LiveOrderWsError,
    onMessage: LiveOrderWsNessage,
  };

  export type RootState = ReturnType<typeof rootReducer>

const liveOrderMiddleware = socketMiddleware(wsActions)

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(liveOrderMiddleware)
    }
});

export type AppActions = TLiveOrderActions;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppActions
>

export default store;