import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Notes, Login } from "../pages";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};
