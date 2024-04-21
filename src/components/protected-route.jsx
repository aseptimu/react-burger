import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import Loader from "./loader/loader";

function ProtectedRoute({forAuthorized = false, children}) {
    const {isAuthorized, isAuthInProgress} = useSelector(store => store.user);
    const location = useLocation();

    if (isAuthInProgress) {
        return <Loader />;
    }

    if (!forAuthorized && isAuthorized) {
        const {from} = location.state || {from: {pathname: '/'}}
        return <Navigate to={from}/>;
    }
console.log(forAuthorized, isAuthorized)
    if (forAuthorized && !isAuthorized) {
        return <Navigate to={'/login'} state={{from: location}}/>;
    }

    return children;
}

export const UnauthorizedRoute = ProtectedRoute;
export const AuthorizedRoute = ({ children }) => {
    // console.log(children)
    return (
        <ProtectedRoute forAuthorized={true} >
            {children}
        </ProtectedRoute>
    );
};