import {combineReducers} from 'redux'
import {coctailsReducer} from "./coctails/coctails.reducer";

export const reducers = combineReducers({
    coctails: coctailsReducer
})