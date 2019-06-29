import React from 'react';
import { storiesOf } from '@storybook/react';

import ProposalCard from '.';

storiesOf('Proposal Card', module)
  .add('Standard', () => (
    <div className="p-5">
      <ProposalCard
        hash="0x8976003…01000000"
        address="0x1234…6789"
        stakeSize="26000"
        dailyReward="2234"
        estimatedVotePower="12"
        timestamp={Date.now()}
      />
    </div>
  ));
