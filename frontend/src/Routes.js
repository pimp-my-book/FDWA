import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import helloWorld from "./containers/helloWorld";

export default () =>
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/queries/helloWorld" component={ helloWorld } />
  </Switch>;
