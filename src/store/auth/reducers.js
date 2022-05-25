import { FETCH_AUTHENTICATED_USER_SUCCESS } from "./actionTypes";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHENTICATED_USER_SUCCESS:
      const { user } = action;
      return { ...state, user };
    default:
      return state;
  }
};
export default authReducer;
