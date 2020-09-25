import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/authentication/Login";
// import PrivateRoute from "./components/CommonComponents/PrivateRoute";

const BaseRouter = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    {/* <PrivateRoute exact path="/:id" component={singlePoll} /> */}
  </Switch>
);
export default BaseRouter;
