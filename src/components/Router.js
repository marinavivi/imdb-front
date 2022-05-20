import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import { HOME_PAGE, LOGIN_PAGE } from '../constants/routes';

const AuthProtection = (
    {children, isOnlyForAuthUsers, isOnlyForGuests}
) => {
    const navigate = useNavigate();
    const user = true

    useEffect(() => {

        if(isOnlyForAuthUsers && !user) return navigate(LOGIN_PAGE);
        if(isOnlyForGuests && user) return navigate(HOME_PAGE);

    // eslint-disable-next-line
    }, [user, isOnlyForAuthUsers, isOnlyForGuests]);

    return <>{children}</>
}

const ProtectedRouterWrapper = ({
    component: Loadable, isAuthenticated, isGuest
}) => {
    // eslint-disable-next-line
  {  return (
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
    )}
}

const Router = () => {
    return (
        <Routes>
            <Route path={HOME_PAGE} element={<ProtectedRouterWrapper component={HomePage} isAuthenticated />} />
            <Route path={LOGIN_PAGE} element={<ProtectedRouterWrapper component={LoginPage} isGuest />} />
        </Routes>
    )
}

export default Router;
