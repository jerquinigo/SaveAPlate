import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth.js";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/user/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
