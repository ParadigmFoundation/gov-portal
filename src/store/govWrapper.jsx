import React, {
  useReducer,
} from 'react';

import DataLoader from './dataLoader';
import GovContext from './govContext';

const initialState = {
  initialized: false,
  address: null,
  ethBalance: null,
  systemBalance: null,
  totalBalance: null,
  activities: null,
  walletBalance: null,
  bondedTokens: null,
  stakedTokens: null,
  treasuryBalance: null,
  allowance: null,
  gov: null,
};

function updateState(state, action) {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        initialized: true,
      };
    case 'set':
      return {
        ...state,
        [action.target]: state[action.value],
      };
    case 'add':
      return {
        ...state,
        [action.target]: state[action.target].plus(state[action.value]),
      };
    case 'sub':
      return {
        ...state,
        [action.target]: state[action.target].minus(state[action.value]),
      };
    default:
      throw new Error(`Unexpected action: ${action.type}`);
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
      <DataLoader />
    </GovContext.Provider>
  );
}

export default GovWrapper;
