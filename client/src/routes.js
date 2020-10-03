import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/authentication/Login";
import register from "./components/authentication/Registration";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/common_pages/PrivateRoute";
import Profile from "./components/profile/Profile";
import Experience from "./components/profile/Experience";
import Education from "./components/profile/Education";

const BaseRouter = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={register} />
    <PrivateRoute exact path="/" component={Dashboard} />
    <PrivateRoute exact path="/profile" component={Profile} />
    <PrivateRoute exact path="/experience" component={Experience} />
    <PrivateRoute exact path="/education" component={Education} />
    {/* <PrivateRoute exact path="/:id" component={singlePoll} /> */}
  </Switch>
);
export default BaseRouter;
