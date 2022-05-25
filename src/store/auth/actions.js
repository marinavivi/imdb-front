import {
  FETCH_AUTHENTICATED_USER,
  FETCH_AUTHENTICATED_USER_SUCCESS,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
} from "./actionTypes";

export function login(email, password, onSucces = () => {}) {
  return {
    type: LOGIN_REQUEST,
    email,
    password,
    onSucces,
  };
}

export function register(email, first_name, password, onSucces = () => {}) {
  return {
    type: REGISTER_REQUEST,
    email,
    first_name,
    password,
    onSucces,
  };
}

export function fetchAuthenticatedUser() {
  return {
    type: FETCH_AUTHENTICATED_USER,
  };
}

export function fetchAuthenticatedUserSuccess(user) {
  return {
    type: FETCH_AUTHENTICATED_USER_SUCCESS,
    user,
  };
}
