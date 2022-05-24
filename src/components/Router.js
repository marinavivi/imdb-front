import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HOME, LOGIN, MOVIES, REGISTER } from '../constants/routes';
import Home from '../pages/Home'
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Movies from "./movie/Movies";
import { fetchAuthenticatedUser } from '../store/auth/actions';
import { getItem } from "../services/LocalStorageService";
import { isAuthenticatedSelector } from "../store/auth/selectors";

const AuthProtection = (
    { children, isOnlyForAuthUsers, isOnlyForGuests }
) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        const token = getItem('token') ? true : false;

        if (token) {
            dispatch(fetchAuthenticatedUser());
        }
        // eslint-disable-next-line
    }, [])

    const user = useSelector(isAuthenticatedSelector());

    useEffect(() => {

        if (isOnlyForAuthUsers && !user) return navigate(LOGIN);
        if (isOnlyForGuests && user) return navigate(HOME);

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
            <Route path={HOME} element={<ProtectedRouterWrapper component={Home} isAuthenticated />} />
            <Route path={LOGIN} element={<ProtectedRouterWrapper component={Login} isGuest />} />
            <Route path={REGISTER} element={<ProtectedRouterWrapper component={Register} isGuest />} />
            <Route path={MOVIES} element={<ProtectedRouterWrapper component={Movies} isAuthenticated />} />
        </Routes>
    )
}

export default Router;
