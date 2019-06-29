import React from 'react';
import { storiesOf } from '@storybook/react';

import ProposalCard from '.';

storiesOf('Proposal Card', module)
  .add('New', () => (
    <div className="p-5">
      <ProposalCard
        hash="0x88c0ec80b76c6c0dcaa951ca1089386f7e4a4a7604ca2b5d5ac0d3d5c9787d42"
        address="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        stakeSize="26000"
        dailyReward="2234"
        estimatedVotePower="12"
        timestamp={Date.now() + 1000 * 60 * 60 * 24 * 2}
      />
    </div>
  ))
  .add('Ending Soon', () => (
    <div className="p-5">
      <ProposalCard
        hash="0x88c0ec80b76c6c0dcaa951ca1089386f7e4a4a7604ca2b5d5ac0d3d5c9787d42"
        address="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        stakeSize="26000"
        dailyReward="2234"
        estimatedVotePower="12"
        timestamp={Date.now()}
      />
    </div>
  ));
