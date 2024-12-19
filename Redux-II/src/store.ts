import {combineReducers, configureStore} from "@reduxjs/toolkit"

import reducer from "./Reducers/reducers";
import { rootReducer } from "./root.Roducer";

export const Store = configureStore(
   {
    reducer:rootReducer
   }
)


  export type RootStore = ReturnType<typeof Store.getState>;
  