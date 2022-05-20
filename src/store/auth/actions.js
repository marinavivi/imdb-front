import { FETCH_AUTHENTICATED_USER, FETCH_AUTHENTICATED_USER_SUCCESS, GET_USER_FROM_URL_REQUEST, GET_USER_FROM_URL_SUCCESS, LOGIN_REQUEST, REGISTER_REQUEST, SET_TOKEN } from "./actionTypes";

export function login(username, password) {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  }
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
export function setToken(token) {
  return {
    type: SET_TOKEN,
    token
  }
}
export function register(first_name, last_name, email, username, password) {
  return {
    type: REGISTER_REQUEST,
    first_name,
    last_name,
    email,
    username,
    password
  }
}

export const getUserFromUrlRequest = () => {
  return {
    type: GET_USER_FROM_URL_REQUEST
  }
}

export function getUserFromUrlSuccess(user) {

  return {
    type: GET_USER_FROM_URL_SUCCESS,
    user: user
  }
}