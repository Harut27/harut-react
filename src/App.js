import React, {
  Component
} from 'react';
import "./style.scss";
import NavbarLink from "./components/navbar-link";


class App extends Component {

  render(){
      let nav = ['Home', 'About',"Contact","Sign IN"]

    return (
      <div className="navbar">
          {nav.map((navbarLink)=>{
            return (
              <NavbarLink link={navbarLink}/>
              )
          })}
      </div>
      
    )
  }
}

export default App;