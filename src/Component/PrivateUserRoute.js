import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "../Context/UserContext";

export default function PrivateUserRoute({ component: Component, ...rest }) {
  const { isSessionAvailable } = useUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        return isSessionAvailable ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
