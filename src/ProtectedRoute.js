import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthApi from './auth-api';
import Cookies from 'js-cookie';

const ProtectedRoute = ({auth, component: Component, ...rest}) => {

    return (
        <Route
        {...rest}
        render = {()=>auth?(
            <Component/>
        ):(<Redirect to="/prijava"/>)}
        />
    )
}

export default ProtectedRoute;