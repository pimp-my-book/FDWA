import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: Container, props: mapContextToProps, ...rest }) =>

<Route
    { ...rest }
    render={ props =>
        !mapContextToProps.isAuthenticated
        ? <C { ...props } { ...cProps } />
        : <Redirect to="/" />
    }
/>;