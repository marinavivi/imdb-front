import { GET_GENRES_SUCCESS } from "./actionTypes";

const initialState = {
  genres: [],
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES_SUCCESS:
      const { genres } = action;
      return { genres };
    default:
      return state;
  }
};
export default genreReducer;
