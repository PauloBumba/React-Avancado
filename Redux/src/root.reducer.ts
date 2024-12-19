import { combineReducers } from "redux";
import { UserSlice } from "./Reducer/reducer";

// Combine os reducers (adicione mais reducers conforme necessário)
 export const rootReducer = combineReducers({
  users: UserSlice.reducer,

});

export type RootState = ReturnType<typeof rootReducer>;


