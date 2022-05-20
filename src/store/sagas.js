import { fork } from 'redux-saga/effects';

import authSaga from './auth/sagas';

export default function* rootSaga() {
  yield fork(authSaga);
  }