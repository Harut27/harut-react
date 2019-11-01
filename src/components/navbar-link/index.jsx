import React from "react";

const NavbarLink = props => {

  const navbarManu = ['Home','Products','Advices','Contact']
  return (
    <div className="navbar">
    { 
      navbarManu.map((navbarMenuLink,index)=>{
        return(
          
          <div className={`navbar-link navbar-${navbarMenuLink.toLowerCase()}`} key={index}>{navbarMenuLink}</div>
        )
      })
    }
    
    </div>
  );
};

export default NavbarLink;
