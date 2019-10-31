import React, { Component } from "react";
import { Route } from "react-router";
// Route - voroshum e te vor URL ov inch component petq a render lini
class GuestLayout extends Component {
  render() {
    const { component: ChildComponent, ...rest } = this.props;
    return (
      <div>
        <div>header</div>
        <Route
          {...rest}
          render={match => {
            // console.log(matchProps);
            return <ChildComponent {...match} />;
            // matchProps -match@ popoxakana u poxancuma a componentin urli infon,
          }}
        />
        <div>footer</div>
      </div>
    );
  }
}

export default GuestLayout;
