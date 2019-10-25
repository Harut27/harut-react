import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import {Home} from "./components/Home";
import About from "./components/about";
import Contact from "./components/contact";
import logo from "./img/ford-logo.png";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="nav">
          <div className="navParentLogo">
              <img src={logo} class="navLogo"/>
          </div>
          <div className="navMeunu">
              <div><Link to="/">Home</Link></div>
              <div><Link to="/about">About</Link></div>
              <div><Link to="/contact">Contact</Link></div>
              <div><Link to="/example">Example</Link></div>
          </div>
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />

          <Route exact path='/example' render={() => {
            return (
              <div>example</div>
            );
          }} />
        </Switch>
      </BrowserRouter>
  </div>
  );
}

export default App;
