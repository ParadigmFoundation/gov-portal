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

function App() {
  const [govContext, setGovContext] = useState();

  useEffect(() => {
    async function init() {
      const gov = new Gov();

      try {
        await gov.init();
        setGovContext(gov);
      } catch (error) {
        console.log(error);
      }
    }

    init();
  }, []);

  return (
    <GovContext.Provider value={govContext}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </GovContext.Provider>
  );
}

export default App;
