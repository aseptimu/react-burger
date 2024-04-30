import React, {FC, ReactElement} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import Loader from "./loader/loader";
import {useAppSelector} from "../services";

type TProtectedData = {
    forAuthorized?: boolean;
    children: React.ReactNode;
}

export const ProtectedRoute: FC<TProtectedData> = ({forAuthorized = false, children}): ReactElement | null => {
    const {isAuthorized, isAuthInProgress} = useAppSelector(store => store.user);
    const location = useLocation();

    if (isAuthInProgress) {
        return <Loader />;
    }

    if (!forAuthorized && isAuthorized) {
        const {from} = location.state || {from: {pathname: '/'}}
        return <Navigate to={from}/>;
    }

    if (forAuthorized && !isAuthorized) {
        return <Navigate to={'/login'} state={{from: location}}/>;
    }

    return <>children</>;
}

export const UnauthorizedRoute = ProtectedRoute;
export const AuthorizedRoute: FC<TProtectedData> = ({ children }) => {
    return (
        <ProtectedRoute forAuthorized={true} >
            {children}
        </ProtectedRoute>
    );
};