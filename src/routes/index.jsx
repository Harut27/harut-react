import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import GuestLayout from "./guest-layout";
import Home from "../components/pages/home";
import Posts from "../components/pages/posts";
import Contact from "../components/pages/contact";
import UserPosts from "../components/pages/user-posts";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <GuestLayout exact path="/" component={Home} />
        <GuestLayout exact path="/home" component={Home} />
        <GuestLayout exact path="/posts" component={Posts} />
        <GuestLayout exact path="/user/:id/posts" component={UserPosts} />

        <GuestLayout exact path="/contact" component={Contact} />
        {/* <GuestLayout exact path="/post/:id" component={ItemPage} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
