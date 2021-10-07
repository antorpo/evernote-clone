import React, {  } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Notes, Login } from "../pages";
import { useSelector } from "react-redux";
import "./App.css";

export const App = () => {
  const signIn = useSelector((state) => state.user.signedIn);

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Notes} signIn={signIn}/>
      </Switch>
    </Router>
  );
};

const ProtectedRoute = ({ signIn, component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) =>
        signIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
