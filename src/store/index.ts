import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import lanReducer from "../features/language/lanSlice";
import layoutReducer from "./layoutReducer";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  language: lanReducer,
  layout: layoutReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
