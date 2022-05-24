import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history'

import authReducer from './auth/reducers'

export const rootReducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
})

