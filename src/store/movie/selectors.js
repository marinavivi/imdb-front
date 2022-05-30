import { createSelector } from "reselect";

const moviesStateSelector = (state) => state.movie;

const moviesListSelector = () =>
  createSelector(moviesStateSelector, (state) => state.movies);

const movieSelector = () =>
  createSelector(moviesStateSelector, (state) => state.movie);

export { moviesListSelector, movieSelector };
