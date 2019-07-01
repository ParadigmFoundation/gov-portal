import React, {
  useContext,
} from 'react';

import GovContext from '../../store/govContext';

import ValidatorSymbol from '../../components/symbols/validatorSymbol';

function Home() {
  const gov = useContext(GovContext);

  console.log(gov);

  return (
    <div>
      <p>Home</p>
      <ValidatorSymbol />
    </div>
  );
}

export default Home;
