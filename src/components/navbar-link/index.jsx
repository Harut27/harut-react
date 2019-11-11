import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = props => {
  const navbarManu = ["Home", "Posts", "Advices", "Contact"];

  return (
    <div className="navbar">
      {navbarManu.map((navbarMenuLink, index) => {
        return (
          <div
            className={`navbar-link navbar-${navbarMenuLink.toLowerCase()}`}
            key={index}
          >
            <Link to={`/${navbarMenuLink.toLowerCase()}`}>
              {navbarMenuLink}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarLink;
