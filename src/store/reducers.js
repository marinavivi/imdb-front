import { combineReducers } from 'redux';

import authReducer from './auth/reducers'

export const rootReducer = combineReducers({
    // router: connectRouter(history),
    auth: authReducer,
})

