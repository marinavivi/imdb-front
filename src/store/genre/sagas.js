import { takeLatest, call, put } from "redux-saga/effects";
import genreService from "../../services/GenreService";
import { getGenresSuccess } from "./actions";
import { GET_GENRES } from "./actionTypes";

export function* getGenres() {
  try {
    const genres = yield call(genreService.getGenres);
    yield put(getGenresSuccess(genres));
  } catch (error) {
    console.log(error);
  }
}

export default function* genreSaga() {
  yield takeLatest(GET_GENRES, getGenres);
}
