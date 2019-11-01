import React, { Component } from "react";
import { Route } from "react-router";
// Route - voroshum e te vor URL ov inch component petq a render lini
class GuestLayout extends Component {
  render() {
    const { component: ChildComponent, ...rest } = this.props;

    // console.log(ChildComponent)
    return (
      <div>
        <div>header</div>
        <Route 
          {...rest}
           render={matchProps => {
            return <ChildComponent {...matchProps} />;
            // matchProps -match@ popoxakana u poxancuma a componentin urli infon,
          }}
        />
        <div>footer</div>
      </div>
    );
  }
}

export default GuestLayout;
