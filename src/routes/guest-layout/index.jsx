import React, { Component } from "react";
import { Route } from "react-router";
import NavbarLink from "../../components/navbar-link";
import Footer from "../../components/footer";
import SideBar from "../../components/sidebar";

class GuestLayout extends Component {
  render() {
    const { component: ChildComponent, ...rest } = this.props;

    return (
      <div>
        <NavbarLink/>
        <div className="content">
          <div className="left-container">
            <SideBar/>
          </div>
          <div className="right-container">
            <Route 
              {...rest}
              render={matchProps => {
                return <ChildComponent {...matchProps} />;
              }}
            />
          </div>

        </div>
        <Footer/>
      </div>
    );
  }
}

export default GuestLayout;
