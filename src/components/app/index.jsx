/**
 * This is the base of our dashboard:
 * Handles and injects the context, and tracks the routes
 */

import React, {
  useState,
  useEffect,
} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Gov from '@kosu/gov-portal-helper';

import GovContext from '../../store/govContext';

import Header from '../header';

import Home from '../../routes/home';
import Account from '../../routes/account';
import Proposal from '../../routes/proposal';
import Challenge from '../../routes/challenge';
import Validator from '../../routes/validator';
import Past from '../../routes/past';

function App() {
  const [govObject, setGovObject] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function init() {
      const gov = new Gov();
      setGovObject(gov);

      try {
        await gov.init();
        setIsReady(true);
      } catch (error) {
        console.log(error);
      }
    }

    init();
  }, []);

  async function initGov() {
    try {
      await govObject.init();
      setIsReady(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GovContext.Provider
      value={{
        gov: govObject,
        isReady,
        initGov,
      }}
    >
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
        </div>
      </BrowserRouter>
    </GovContext.Provider>
  );
}

export default App;
