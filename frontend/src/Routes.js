import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import helloWorld from "./containers/helloWorld";
import GetAllItems from "./containers/GetAllItems";
import PlaceOrder from "./containers/PlaceOrder";

export default () =>
  <Switch>
    <Route path="/" exact component={ Home } />
    <Route path="/queries/helloWorld" exact component={ helloWorld } />
    <Route path="/queries/getAllItems" exact component={ GetAllItems } />
    <Route path="/mutations/placeOrder" exact component={ PlaceOrder } />
  </Switch>;
  