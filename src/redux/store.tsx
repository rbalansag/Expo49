import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

import network_slice from "./slice/network_slice";

const persistConfig = {
   key: "root",
   version: 1,
   storage: AsyncStorage,
};

const reducer = combineReducers({
   network: network_slice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
   }),
});

export let persistor = persistStore(store)