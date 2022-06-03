import { createSelector } from "reselect";

const genreStateSelector = (state) => state.genre;

const genresListSelector = () =>
  createSelector(genreStateSelector, (state) => state.genres);

export { genresListSelector };
