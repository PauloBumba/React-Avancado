import  { combineReducers } from 'redux';
import { themeSlice } from './Reducer/reducer';

export const rootReducer = combineReducers({
    Theme: themeSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>;


