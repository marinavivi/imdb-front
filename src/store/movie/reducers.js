import { GET_MOVIES_SUCCESS, GET_MOVIE_SUCCESS } from "./actionTypes";

const initialState = {
  movies: [],
  movie: {},
  count: 0,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return { ...state, movies: action.movies, count: action.count };
    case GET_MOVIE_SUCCESS:
      const { movie } = action;
      return { ...state, movie };
    default:
      return state;
  }
};
export default movieReducer;
