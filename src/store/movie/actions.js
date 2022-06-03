import {
  ADD_MOVIE,
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIE,
  GET_MOVIE_SUCCESS,
} from "./actionTypes";

export function addMovie(data, onSuccess = () => {}) {
  return {
    type: ADD_MOVIE,
    data,
    onSuccess,
  };
}

export function getMovies(page, title, genre) {
  return {
    type: GET_MOVIES,
    page,
    title,
    genre,
  };
}

export function getMoviesSuccess(movies, count) {
  return {
    type: GET_MOVIES_SUCCESS,
    movies,
    count,
  };
}

export function getMovie(id) {
  return {
    type: GET_MOVIE,
    id,
  };
}

export function getMovieSuccess(movie) {
  return {
    type: GET_MOVIE_SUCCESS,
    movie,
  };
}
