import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../utils/history";

import authReducer from "./auth/reducers";
import movieReducer from "./movie/reducers";
import genreReducer from "./genre/reducers";

export const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  movie: movieReducer,
  genre: genreReducer,
});
