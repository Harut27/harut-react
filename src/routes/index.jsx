import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import GuestLayout from "./guest-layout";
import Input from "../components/input";
import ItemPage from "../components/item-page";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <GuestLayout exact path="/posts" component={Input} />
        <GuestLayout path="/post/:id" component={ItemPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
