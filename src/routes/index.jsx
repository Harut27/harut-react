import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import GuestLayout from "./guest-layout";
import Home from "../components/home";
import ItemPage from "../components/item-page";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <GuestLayout  exact path="/" component={Home} />
        {/* <GuestLayout exact path="/posts" component={NavbarLink} /> */}
        <GuestLayout exact path="/post/:id" component={ItemPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
