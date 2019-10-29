import React from "react";

function NavbarLink({ link }) {
  let classNameForLink = link.toLowerCase().replace(/\s/g, "");
  let linkUpperCase = link.toUpperCase();
  return (
    <div className={`navbar-link navbar-${classNameForLink}`}>
      {linkUpperCase}
    </div>
  );
}

export default NavbarLink;
