import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContex } from "../Contexts/ReactRoutingV5II/AuthContex";

const PrivateRoute = ({
  redirectPath = "/login",
  push = false,
  path,
  children,
  exact = false,
}) => {
  const { isAuth } = useContext(AuthContex);

  return isAuth ? (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  ) : (
    <Redirect to={redirectPath} push={push} />
  );
};

export { PrivateRoute };
