import React from 'react';
import { storiesOf } from '@storybook/react';

import ValidatorsView from '.';

const validators = [
  {
    owner: '0xc521f483f607eb5ea4d6b2dfdbd540134753a865',
    power: 11,
    stakeSize: 38495,
    dailyReward: 342429,
    confirmationUnix: 1562165101,
  },
  {
    owner: '0xd621f483f607eb5ea4d6b2dfdbd540134753a631',
    power: 9,
    stakeSize: 28495,
    dailyReward: 122429,
    confirmationUnix: 1562150101,
  },
];

storiesOf('Routes/Home/ValidatorsView', module)
  .add('MetaMask not connected', () => (
    <div className="p-5">
      <ValidatorsView />
    </div>
  ))
  .add('MetaMask connected but no validators', () => (
    <div className="p-5">
      <ValidatorsView
        metaMaskConnected
      />
    </div>
  ))
  .add('MetaMask connected and validators', () => (
    <div className="p-5">
      <ValidatorsView
        validators={validators}
        metaMaskConnected
      />
    </div>
  ));
