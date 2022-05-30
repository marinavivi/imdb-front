import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_MOVIE,
  HOME_PAGE,
  LOGIN_PAGE,
  MOVIES,
  REGISTER_PAGE,
  SINGLE_MOVIE,
} from "../constants/routes";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import MoviesPage from "../pages/movie/MoviesPage";
import AddMoviePage from "../pages/movie/AddMoviePage";
import { fetchAuthenticatedUser } from "../store/auth/actions";
import { getItem } from "../services/LocalStorageService";
import { isAuthenticatedSelector } from "../store/auth/selectors";
import SingleMoviePage from "../pages/movie/SingleMoviePage";

const AuthProtection = ({ children, isOnlyForAuthUsers, isOnlyForGuests }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const token = getItem("token") ? true : false;

    if (token) {
      dispatch(fetchAuthenticatedUser());
    }
    // eslint-disable-next-line
  }, []);

  const user = useSelector(isAuthenticatedSelector());

  useEffect(() => {
    if (isOnlyForAuthUsers && !user) return navigate(LOGIN_PAGE);
    if (isOnlyForGuests && user) return navigate(HOME_PAGE);

    // eslint-disable-next-line
  }, [user, isOnlyForAuthUsers, isOnlyForGuests]);

  return <>{children}</>;
};

const ProtectedRouterWrapper = ({
  component: Loadable,
  isAuthenticated,
  isGuest,
}) => {
  // eslint-disable-next-line
  {
    return (
      <Suspense fallback={<>Loading...</>}>
        {isAuthenticated && (
          <AuthProtection isOnlyForAuthUsers>
            <Loadable />
          </AuthProtection>
        )}
        {isGuest && (
          <AuthProtection isOnlyForGuests>
            <Loadable />
          </AuthProtection>
        )}
        {!isAuthenticated && !isGuest && <Loadable />}
      </Suspense>
    );
  }
};

const Router = () => {
  return (
    <Routes>
      <Route
        path={HOME_PAGE}
        element={
          <ProtectedRouterWrapper component={HomePage} isAuthenticated />
        }
      />
      <Route
        path={LOGIN_PAGE}
        element={<ProtectedRouterWrapper component={LoginPage} isGuest />}
      />
      <Route
        path={REGISTER_PAGE}
        element={<ProtectedRouterWrapper component={RegisterPage} isGuest />}
      />
      <Route
        path={MOVIES}
        element={
          <ProtectedRouterWrapper component={MoviesPage} isAuthenticated />
        }
      />
      <Route
        path={ADD_MOVIE}
        element={
          <ProtectedRouterWrapper component={AddMoviePage} isAuthenticated />
        }
      />
      <Route
        path={SINGLE_MOVIE}
        element={
          <ProtectedRouterWrapper component={SingleMoviePage} isAuthenticated />
        }
      />
    </Routes>
  );
};

export default Router;
