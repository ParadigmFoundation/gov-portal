import React, {
  useState,
  useContext,
  useEffect,
} from 'react';

import GovContext from '../../store/govContext';

import HomeView from './components/homeView';

function Home() {
  const gov = useContext(GovContext);

  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  useEffect(() => {
    if (gov) {
      console.log(gov);
      setIsMetaMaskConnected(true);
    }
  }, [gov]);

  return (
    <div>
      <HomeView
        metaMaskConnected={isMetaMaskConnected}
      />
    </div>
  );
}

export default Home;
