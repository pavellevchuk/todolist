import { combineReducers } from 'redux'

import todoReducer from './todos'
import userReducer from './user'

export const rootReducer = combineReducers({
    todoReducer,
    userReducer
})