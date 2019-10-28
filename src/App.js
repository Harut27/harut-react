import React from 'react';
import "./style.scss";

function App() {
  let links = ["home","about","contact us","sign in"];
  return (
    <div className="App">
        { 
          links.map((link,i) => {
            return <NavbarLink key={i.toString()} name={link} />        
          })
        }
    </div>
  );
}

function NavbarLink({ name }) {
  return (
     <span 
       onClick={()=>{
       alert(name);
     }}
     className={`navbar-link navbar-${name}`} > 
        {
          name.toUpperCase()
        }
      </span>
  )
}



export default App;