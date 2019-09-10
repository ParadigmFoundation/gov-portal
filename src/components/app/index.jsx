/**
 * This is the base of our dashboard:
 * Handles and injects the context, and tracks the routes
 */

import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';

import Home from '../../routes/home';
import Account from '../../routes/account';
import Proposal from '../../routes/proposal';
import Challenge from '../../routes/challenge';
import Validator from '../../routes/validator';
import Past from '../../routes/past';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/account" component={Account} />
          <Route path="/governance" component={Home} />
          <Route path="/proposal/:id" component={Proposal} />
          <Route path="/challenge/:id" component={Challenge} />
          <Route path="/validator/:id" component={Validator} />
          <Route path="/past/:id" component={Past} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
