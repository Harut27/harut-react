import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Link } from 'react-router-dom';

import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul className="meunu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/example">Example</Link></li>
        </ul>

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
