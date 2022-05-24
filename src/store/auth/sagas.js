import { takeLatest, call, put } from 'redux-saga/effects';
import authService from '../../services/AuthService';
import { fetchAuthenticatedUserSuccess } from './actions';
import { FETCH_AUTHENTICATED_USER, LOGIN_REQUEST, REGISTER_REQUEST } from './actionTypes';

export function* login({ email, password, onSucces, }) {
    
    try {

        yield call(authService.login, { email, password });
        yield call(onSucces)

    } catch (error) {
        console.log(error)
    }
}

export function* register(
    {
        first_name,
        email,
        password,
        onSucces,
    }
) {
    try {
        yield call(authService.register, {
            email,
            first_name,
            password,
        });
        yield call (onSucces)

    } catch (error) {
        console.log(error)
    }
}

export function* fetchAuthenticatedUser() {
    try {
        const user = yield call(authService.fetchAuthenticatedUser);
        yield put(fetchAuthenticatedUserSuccess(user));
    } catch (error) {
        console.log(error)
    }
}


export default function* authSaga() {
    yield takeLatest(LOGIN_REQUEST, login);
    yield takeLatest(REGISTER_REQUEST, register);
    yield takeLatest(FETCH_AUTHENTICATED_USER, fetchAuthenticatedUser)
}