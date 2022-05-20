import { takeLatest, call, put } from 'redux-saga/effects';
import authService from '../../services/AuthService';
import { setToken, getUserFromUrlSuccess } from '../auth/actions';
import { LOGIN_REQUEST, REGISTER_REQUEST, GET_USER_FROM_URL_REQUEST } from './actionTypes';

export function* authorize(username, password) {
    try {
        const token = yield call(authService.login, { username, password });
        yield put(setToken(token))
    } catch (error) {
        console.log(error);
    }
}
export function* register(
    first_name,
    last_name,
    email,
    username,
    password,
) {
    try {
        const token = yield call(authService.register, {
            first_name,
            last_name,
            email,
            username,
            password,
        });
        yield put(setToken(token));
    } catch (error) {

    }
}

export function* handleGetUserFromUrl () {
   
    try {
        const response = yield call (authService.getUserFromUrl);
        yield put (getUserFromUrlSuccess(response));
    }catch (error) {
        console.log(error);
    }
}

export default function* authSaga() {
    yield takeLatest(LOGIN_REQUEST, authorize);
    yield takeLatest(REGISTER_REQUEST, register);
    yield takeLatest(GET_USER_FROM_URL_REQUEST, handleGetUserFromUrl)
}