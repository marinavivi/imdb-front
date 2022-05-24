import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import { HOME_PAGE, LOGIN_PAGE, MOVIE_LIST_PAGE, REGISTER_PAGE } from '../constants/routes';
import RegisterPage from "../pages/RegisterPage";
import { useSelector, useDispatch } from "react-redux";
import MovieListPage from "../pages/MovieListPage";
import { fetchAuthenticatedUser } from '../store/auth/actions';

const AuthProtection = (
    { children, isOnlyForAuthUsers, isOnlyForGuests }
) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token') ? true : false;
        if (token) {
            dispatch(fetchAuthenticatedUser());
        }
        // eslint-disable-next-line
    }, [])

    const user = useSelector(state => state.auth.user ? true : false);
    console.log(user);

    useEffect(() => {
        
        if (isOnlyForAuthUsers && !user) return navigate(LOGIN_PAGE);
        if (isOnlyForGuests && user) return navigate(HOME_PAGE);

        // eslint-disable-next-line
    }, [user, isOnlyForAuthUsers, isOnlyForGuests]);

    return <>{children}</>
}

const ProtectedRouterWrapper = ({
    component: Loadable, isAuthenticated, isGuest
}) => {
    // eslint-disable-next-line
    {
        return (
            <Suspense fallback={<>Loading...</>}>
                {
                    isAuthenticated && (<AuthProtection isOnlyForAuthUsers><Loadable /></AuthProtection>)
                }
                {
                    isGuest && (<AuthProtection isOnlyForGuests><Loadable /></AuthProtection>)
                }
                {
                    !isAuthenticated && !isGuest && <Loadable />
                }
            </Suspense>
        )
    }
}

const Router = () => {
    return (
        <Routes>
            <Route path={HOME_PAGE} element={<ProtectedRouterWrapper component={HomePage} isAuthenticated />} />
            <Route path={LOGIN_PAGE} element={<ProtectedRouterWrapper component={LoginPage} isGuest />} />
            <Route path={REGISTER_PAGE} element={<ProtectedRouterWrapper component={RegisterPage} isGuest />} />
            <Route path={MOVIE_LIST_PAGE} element={<ProtectedRouterWrapper component={MovieListPage} isAuthenticated />} />
        </Routes>
    )
}

export default Router;
