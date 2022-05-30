import { GET_GENRES, GET_GENRES_SUCCESS } from "./actionTypes";

export function getGenres() {
  return {
    type: GET_GENRES,
  };
}

export function getGenresSuccess(genres) {
  return {
    type: GET_GENRES_SUCCESS,
    genres,
  };
}
