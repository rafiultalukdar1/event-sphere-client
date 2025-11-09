import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from './useAuth';
import Loading from '../pages/Loading/Loading';

const PrivetRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return <Loading></Loading>;
    }

    if(user && user?.email ) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivetRoute;