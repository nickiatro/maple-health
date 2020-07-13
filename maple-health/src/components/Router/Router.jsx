import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../../views/Home';
import { About } from '../../views/About';
import { Contact } from '../../views/Contact';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Router;
