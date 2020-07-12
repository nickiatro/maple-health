import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { About } from '../../views/About';
import { Contact } from '../../views/Contact';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
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
