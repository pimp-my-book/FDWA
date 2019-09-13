import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import { mapContextToProps } from "react-context-toolbox";

export default ({ component: Container, props: mapContextToProps, ...rest }) =>

<Route
    { ...rest }
    render={ props =>
        !mapContextToProps.isAuthenticated
        ? <C { ...props } { ...cProps } />
        : <Redirect to="/" />
    }
/>;