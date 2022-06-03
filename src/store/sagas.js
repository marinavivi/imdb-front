import { fork } from "redux-saga/effects";

import authSaga from "./auth/sagas";
import movieSaga from "./movie/sagas";
import genreSaga from "./genre/sagas";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(movieSaga);
  yield fork(genreSaga);
}
