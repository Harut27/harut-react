import React, { Component } from "react";
import { Route } from "react-router";
import NavbarLink from "../../components/navbar-link";

class GuestLayout extends Component {
  render() {
    const { component: ChildComponent, ...rest } = this.props;

    return (
      <div>
        <NavbarLink/>
        <Route 
          {...rest}
           render={matchProps => {
            return <ChildComponent {...matchProps} />;
          }}
        />
        <div>footer</div>
      </div>
    );
  }
}

export default GuestLayout;
