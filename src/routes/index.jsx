import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import GuestLayout from "./guest-layout";
import Home from "../components/navbar-link/home";
import Advices from "../components/navbar-link/advices";
import Products from "../components/navbar-link/products";
import Contact from "../components/navbar-link/contact";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <GuestLayout  exact path="/" component={Home} />
        <GuestLayout  exact path="/home" component={Home} />
        <GuestLayout exact path="/products" component={Products}/>
        <GuestLayout exact path="/advices" component={Advices}/>
        <GuestLayout exact path="/contact" component={Contact}/>
        {/* <GuestLayout exact path="/post/:id" component={ItemPage} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
