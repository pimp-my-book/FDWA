import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import helloWorld from "./containers/helloWorld";
import GetAllItems from "./containers/GetAllItems";
import PlaceOrder from "./containers/PlaceOrder";
import Login from "./containers/Login";
import ForgottenPassword from "./containers/ForgottenPassword";
import SignUp from "./containers/SignUp";

export default () =>
  <Switch>
    <Route path="/" exact component={ Home } />
    <Route path="/queries/helloWorld" exact component={ helloWorld } />
    <Route path="/queries/getAllItems" exact component={ GetAllItems } />
    <Route path="/mutations/placeOrder" exact component={ PlaceOrder } />
    <Route path="/login" exact component={ Login } />
    <Route path="/ForgottenPassword" exact component={ ForgottenPassword } />
    <Route path="/signup" exact component={ SignUp } />
  </Switch>;
  