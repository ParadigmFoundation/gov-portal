import React from 'react';
import { storiesOf } from '@storybook/react';

import ActiveProposalsView from '.';

const newProposalTimestamp = (Date.now() / 1000) + 60 * 60 * 24 * 8;
const endingSoonTimestamp = (Date.now() / 1000) + 6 * 60 * 60;
const normalTimestamp = (Date.now() / 1000) + 60 * 60 * 24 * 2;

const proposals = [
  {
    id: '0x12345678987654321',
    owner: '0x9876543é123456789',
    stakeSize: 16000,
    dailyReward: 1234,
    power: 19,
    acceptUnix: normalTimestamp,
  },
  {
    id: '0x12345678987654321',
    owner: '0x9876543é123456789',
    stakeSize: 26000,
    dailyReward: 5234,
    power: 13,
    acceptUnix: newProposalTimestamp,
  },
  {
    id: '0x12345678987654321',
    owner: '0x9876543é123456789',
    stakeSize: 36000,
    dailyReward: 2234,
    power: 12,
    acceptUnix: endingSoonTimestamp,
  },
];

storiesOf('Routes/Home/ActiveProposalsView', module)
  .add('MetaMask not connected', () => (
    <div className="p-5">
      <ActiveProposalsView />
    </div>
  ))
  .add('MetaMask connected but no active proposals', () => (
    <div className="p-5">
      <ActiveProposalsView
        metaMaskConnected
      />
    </div>
  ))
  .add('MetaMask connected and active proposals', () => (
    <div className="p-5">
      <ActiveProposalsView
        metaMaskConnected
        proposals={proposals}
      />
    </div>
  ));
