import React, {
  useContext,
} from 'react';

import GovContext from '../../store/govContext';

function Home() {
  const gov = useContext(GovContext);

  console.log(gov);

  return (
    <div>
      <p>Home</p>
    </div>
  );
}

export default Home;
