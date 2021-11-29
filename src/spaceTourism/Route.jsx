import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Destination } from "./components/Destination";
import { Home } from "./components/Home";
import { HeaderNav } from "./header/HeaderNav";
import Card from "./layout/card";

const Routes = () => {
  return (
    <Router>
      <HeaderNav />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/destination" exact component={Destination}></Route>
        <Route path="/card" exact component={Card}></Route>
      </Switch>
    </Router>
  );
};
export default Routes;
