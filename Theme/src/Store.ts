import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./rootReducer";



const persistConfig={
  key:"root",
  storage
    
}
const PersistReducer = persistReducer(persistConfig, rootReducer);
 export const Store = configureStore({
    reducer: PersistReducer
 })

export const  persistor = persistStore(Store);
export type RootStore = ReturnType<typeof Store.getState>