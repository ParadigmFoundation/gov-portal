import React from 'react';
import Gov from '@kosu/gov-portal-helper';

function Home() {
  function initGov() {
    // init life-cycle (example only)
    (async () => {
      const gov = new Gov();
      try {
        await gov.init();

        console.log('Initialized!');

        console.log(gov);

        const { coinbase } = gov;
        const balance = await gov.kosu.kosuToken.balanceOf(coinbase);

        console.log(balance.toString());
      } catch (error) {
        switch (error.message) {
          case 'user denied site access':
            /* user clicked "reject" on MM prompt */
            break;
          case 'non-ethereum browser detected':
            /* incompatible browser */
            break;
          default: {
            /* normal failure case, something unexpected went wrong */
          }
        }
      }
    })();
  }

  return (
    <div>
      <p>Home</p>
      <button onClick={initGov} type="button">
        Init
      </button>
    </div>
  );
}

export default Home;
