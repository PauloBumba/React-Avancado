import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from "./root.reducer";
import logger from "redux-logger"; // Correto middleware de logging

export const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof Store.getState>;
