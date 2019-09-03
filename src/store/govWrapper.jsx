import React, {
  useReducer,
  useEffect,
  useState,
} from 'react';
import Gov from '@kosu/gov-portal-helper';

import App from '../components/app';

import GovContext from './govContext';

const initialState = {
  initialized: false,
  address: '',
  ethBalance: '0',
  walletBalance: '0',
  bondedTokens: '0',
  stakedTokens: '0',
  treasuryBalance: '0',
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
        [action.id]: action.amount,
      };
    case 'increment':
      return {
        ...state,
        [action.id]: state.action.id + action.amount,
      };
    default:
      throw new Error('Unexpected action');
  }
}

function GovWrapper() {


  
  return (
    <GovContext.Provider

    >
      <App />
    </GovContext.Provider>
  );
}

export default GovWrapper;
