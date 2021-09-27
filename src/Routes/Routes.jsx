import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "./About";
import { Contect } from "./Contect";
import { Home } from "./Home";
import {NavBar} from "./NavBar";
import { Login } from "./ReactRoutingV5II/Login";
import { PrivateRoute } from "../common/PrivateRoute";
import { Users } from "./Users";
import { UsersPage } from "./UsersPage";

export default function Routes() {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <PrivateRoute path="/users" exact>
          <Users />
        </PrivateRoute>
        <PrivateRoute path="/users/:userId">
          <UsersPage />
        </PrivateRoute>
        <Route path="/contect">
          <Contect />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <p className="display-1">
            YOUR URL WRONG <br />
            <span className="fw-bold">404</span> PAGE IS NOT FOUND
          </p>
        </Route>
      </Switch>
    </div>
  );
}
