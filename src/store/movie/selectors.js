import { createSelector } from "reselect";

const moviesStateSelector = (state) => state.movie;

const moviesListSelector = () =>
  createSelector(moviesStateSelector, (state) => state.movies);

const movieSelector = () =>
  createSelector(moviesStateSelector, (state) => state.movie);

const countSelector = () =>
  createSelector(moviesStateSelector, (state) => state.count);

export { moviesListSelector, movieSelector, countSelector };
