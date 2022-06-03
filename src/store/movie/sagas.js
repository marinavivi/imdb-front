import { takeLatest, call, put } from "redux-saga/effects";
import movieService from "../../services/MovieService";
import { ADD_MOVIE, GET_MOVIES, GET_MOVIE } from "./actionTypes";
import { getMoviesSuccess, getMovieSuccess } from "./actions";

export function* addMovie({ data, onSuccess }) {
  try {
    yield call(movieService.addMovie, data);
    yield call(onSuccess);
  } catch (error) {
    console.log(error);
  }
}

export function* getMovies(action) {
  try {
    const movies = yield call(movieService.getMovies, {
      page: action.page,
      title: action.title,
      genre: action.genre,
    });
    yield put(getMoviesSuccess(movies.results, movies.count));
  } catch (error) {
    console.log(error);
  }
}

export function* getMovie(action) {
  try {
    const movie = yield call(movieService.getMovie, { id: action.id });
    yield put(getMovieSuccess(movie));
  } catch (error) {
    console.log(error);
  }
}

export default function* movieSaga() {
  yield takeLatest(ADD_MOVIE, addMovie);
  yield takeLatest(GET_MOVIES, getMovies);
  yield takeLatest(GET_MOVIE, getMovie);
}
