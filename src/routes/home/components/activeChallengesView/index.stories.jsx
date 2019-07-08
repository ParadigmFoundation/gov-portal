import React from 'react';
import { storiesOf } from '@storybook/react';

import ActiveChallengesView from '.';

const newTimestamp = (Date.now() / 1000) + 60 * 60 * 24 * 8;
const endingSoonTimestamp = (Date.now() / 1000) + 6 * 60 * 60;
const normalTimestamp = (Date.now() / 1000) + 60 * 60 * 24 * 2;

const activeChallenges = [
  {
    id: 30,
    listingOwner: '0x12a2fc11be873eca93a083c5cabc38ec59bbc987',
    challenger: '0x85d2fc11be873eca93a083c5cabc38ec59bbc333',
    challengeEndUnix: normalTimestamp,
    challengerStake: 24059,
    potentialReward: 12345,
  },
  {
    id: 34,
    listingOwner: '0x11a2fc11be873eca93a083c5cabc38ec59bbc987',
    challenger: '0x86d2fc11be873eca93a083c5cabc38ec59bbc232',
    challengeEndUnix: newTimestamp,
    challengerStake: 24059,
    potentialReward: 12345,
  },
  {
    id: 12,
    listingOwner: '0x13a2fc11be873eca93a083c5cabc38ec59bbc989',
    challenger: '0x86d2fc11be873eca93a083c5cabc38ec59bbc221',
    challengeEndUnix: endingSoonTimestamp,
    challengerStake: 24059,
    potentialReward: 12345,
  },
];

storiesOf('Routes/Home/ActiveChallengesView', module)
  .add('MetaMask not connected', () => (
    <div className="p-5">
      <ActiveChallengesView />
    </div>
  ))
  .add('MetaMask connected but no active challenges', () => (
    <div className="p-5">
      <ActiveChallengesView
        metaMaskConnected
      />
    </div>
  ))
  .add('MetaMask connected and active challenges', () => (
    <div className="p-5">
      <ActiveChallengesView
        metaMaskConnected
        activeChallenges={activeChallenges}
      />
    </div>
  ));
