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
        <section>
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

        </section>
        <Footer/>
      </div>
    );
  }
}

export default GuestLayout;
