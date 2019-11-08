import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import GuestLayout from "./guest-layout";
import Home from "../components/home";
import Advices from "../components/advices";
import Products from "../components/products";
import Contact from "../components/contact";

const Routes = () => {
  return (
    <Router>
      <Switch>
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
