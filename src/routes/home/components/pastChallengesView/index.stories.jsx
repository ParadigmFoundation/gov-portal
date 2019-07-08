import React from 'react';
import { storiesOf } from '@storybook/react';

import PastChallengesView from '.';

const pastChallenges = [
  {
    id: 42,
    challenger: '0xc521f483f607eb5ea4d6b2dfdbd540134753a865',
    challengeType: 'proposal',
    result: 'passed',
    stakedBalance: 342429,
    challengeEnd: 1562165101,
  },
  {
    id: 36,
    challenger: '0xd321f483f607eb5ea4d6b2dfdbd540134753a333',
    challengeType: 'validator',
    result: 'rejected',
    stakedBalance: 123948,
    challengeEnd: 1562165102,
  },
];

storiesOf('Routes/Home/PastChallengesView', module)
  .add('MetaMask not connected', () => (
    <div className="p-5">
      <PastChallengesView />
    </div>
  ))
  .add('MetaMask connected but no past challenges', () => (
    <div className="p-5">
      <PastChallengesView
        metaMaskConnected
      />
    </div>
  ))
  .add('MetaMask connected and past challenges', () => (
    <div className="p-5">
      <PastChallengesView
        pastChallenges={pastChallenges}
        metaMaskConnected
      />
    </div>
  ));
