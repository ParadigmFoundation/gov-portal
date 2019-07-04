import React from 'react';
import { storiesOf } from '@storybook/react';

import ActiveProposalCard from '.';

const newProposalTimestamp = (Date.now() / 1000) + 60 * 60 * 24 * 8;
const endingSoonTimestamp = (Date.now() / 1000) + 6 * 60 * 60;
const normalTimestamp = (Date.now() / 1000) + 60 * 60 * 24 * 2;

storiesOf('Components/Active Proposal Card', module)
  .add('Normal proposal', () => (
    <div className="p-5">
      <ActiveProposalCard
        id="0x88c0ec80b76c6c0dcaa951ca1089386f7e4a4a7604ca2b5d5ac0d3d5c9787d42"
        owner="0x86d2fc11be873eca93a083c5cabc38ec59bbc222"
        stakeSize={26000}
        dailyReward={2334}
        power={12}
        acceptUnix={normalTimestamp}
      />
    </div>
  ))
  .add('New proposal', () => (
    <div className="p-5">
      <ActiveProposalCard
        id="0x88c0ec80b76c6c0dcaa951ca1089386f7e4a4a7604ca2b5d5ac0d3d5c9787d42"
        owner="0x86d2fc11be873eca93a083c5cabc38ec59bbc222"
        stakeSize={26000}
        dailyReward={2334}
        power={12}
        acceptUnix={newProposalTimestamp}
      />
    </div>
  ))
  .add('Ending soon proposal', () => (
    <div className="p-5">
      <ActiveProposalCard
        id="0x88c0ec80b76c6c0dcaa951ca1089386f7e4a4a7604ca2b5d5ac0d3d5c9787d42"
        owner="0x86d2fc11be873eca93a083c5cabc38ec59bbc222"
        stakeSize={26000}
        dailyReward={2334}
        power={12}
        acceptUnix={endingSoonTimestamp}
      />
    </div>
  ));
