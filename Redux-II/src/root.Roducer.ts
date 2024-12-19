import {CombinedSliceReducer, combineReducers} from "@reduxjs/toolkit"
import { UserSlice } from "./Reducers/reducers"

export const rootReducer = combineReducers(
    {Users:UserSlice.reducer

    }
)

export type RootState = ReturnType <typeof rootReducer>