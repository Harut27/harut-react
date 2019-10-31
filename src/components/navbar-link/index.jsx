import React from 'react' 


function NavbarLink( {link} ){

  return(
    <div className={`navbar-link navbar-${link.toLowerCase().replace(/\s/g, "")}`}>
      {link}
    </div>
  )
}



export default NavbarLink;

