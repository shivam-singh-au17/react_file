import React from "react";
import { Route, Switch } from "react-router";
import NavBar from "./NavBar";
import { Home } from "./Home";
import { AllProducts } from "./AllProducts";
import { UsersPage } from "./UsersPage";

export default function Routes() {
  const myStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
  };

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products">
          <AllProducts />
        </Route>
        <Route path="/users/:userId">
          <UsersPage />
        </Route>
        <Route>
          <div style={myStyle}>
            <div className="display-1 text-danger">
              YOUR URL IS WRONG <br />
              <span className="fw-bold">404</span> PAGE IS NOT FOUND
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
}
