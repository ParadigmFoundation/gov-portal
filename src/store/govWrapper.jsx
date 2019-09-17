import React, {
  useReducer,
} from 'react';
import Gov from '@kosu/gov-portal-helper';
import BigNumber from 'bignumber.js';

import GovDataLoader from './govDataLoader';

import GovContext from './govContext';

const initialState = {
  gov: new Gov(),
  isReady: false,
  coinbase: '',
  ethBalance: '0',
  walletBalance: '0',
  bondedTokens: '0',
  stakedTokens: '0',
  treasuryBalance: '0',
  totalBalance: '0',
  systemBalance: '0',
  treasuryAllowance: '',
  govActivities: [],
};

function updateState(state, action) {
  switch (action.type) {
    case 'set':
      return {
        ...state,
        [action.target]: action.value,
      };
    case 'add':
      return {
        ...state,
        [action.target]: new BigNumber(state[action.target]).plus(new BigNumber(action.value)).toString(),
      };
    default:
      throw new Error(`Unexpected action...${action}`);
  }
}

function GovWrapper() {
  const [state, dispatch] = useReducer(updateState, initialState);


  return (
    <GovContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      <GovDataLoader />
    </GovContext.Provider>
  );
}

export default GovWrapper;
