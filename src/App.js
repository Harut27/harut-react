import React, {
  Component
} from 'react';
import "./style.scss";
import NavbarLink from './components/navbar-link'
import Logo from './components/logo'

class App extends Component { 

  render(){

    let navbarElements = ['Home','About','Contact','Sign In'];

    return(
      <nav>
        <div className="navbar-logo">
            <Logo/>
        </div>
        <div className="navbar">
          {
            navbarElements.map((navbarLink, index)=>{
              return(
                <NavbarLink link={navbarLink} key={index}/>
              )
            })
          }
        </div>
      </nav>
    ) 
  }
}

export default App;
