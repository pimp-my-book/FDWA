import React from "react";
import { Switch } from "react-router-dom";
import Home from "./containers/Home";
import helloWorld from "./containers/helloWorld";
import GetAllItems from "./containers/GetAllItems";
import PlaceOrder from "./containers/PlaceOrder";
import Login from "./containers/Login";
import ForgottenPassword from "./containers/ForgottenPassword";
import SignUp from "./containers/SignUp";
import AppliedRoute from "./components/routes/AppliedRoute";
import AuthenticatedRoute from "./components/routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/routes/UnauthenticatedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={ Home } props={ childProps } />

    <AuthenticatedRoute path="/queries/helloWorld" exact component={ helloWorld } props={ childProps } />
    <AuthenticatedRoute path="/queries/getAllItems" exact component={ GetAllItems } props={ childProps } />
    <AuthenticatedRoute path="/mutations/placeOrder" exact component={ PlaceOrder } props={ childProps } />

    <UnauthenticatedRoute path="/login" exact component={ Login } props={ childProps } />
    <UnauthenticatedRoute path="/ForgottenPassword" exact component={ ForgottenPassword } props={ childProps } />
    <UnauthenticatedRoute path="/signup" exact component={ SignUp } props={ childProps } />
  </Switch>;
  