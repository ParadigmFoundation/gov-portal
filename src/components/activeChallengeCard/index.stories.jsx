import React from 'react';
import { storiesOf } from '@storybook/react';

import ActiveChallengeCard from '.';

const newTimestamp = (Date.now() / 1000) + 60 * 60 * 24 * 8;
const endingSoonTimestamp = (Date.now() / 1000) + 6 * 60 * 60;
const normalTimestamp = (Date.now() / 1000) + 60 * 60 * 24 * 2;

storiesOf('Components/Active Challenge Card', module)
  .add('Normal challenge', () => (
    <div className="p-5">
      <ActiveChallengeCard
        id="42"
        listingOwner="0x86d2fc11be873eca93a083c5cabc38ec59bbc222"
        challenger="0x12a2fc11be873eca93a083c5cabc38ec59bbc987"
        challengerStake={26300}
        potentialReward={72334}
        challengeEndUnix={normalTimestamp}
      />
    </div>
  ))
  .add('New challenge', () => (
    <div className="p-5">
      <ActiveChallengeCard
        id="42"
        listingOwner="0x86d2fc11be873eca93a083c5cabc38ec59bbc222"
        challenger="0x12a2fc11be873eca93a083c5cabc38ec59bbc987"
        challengerStake={26300}
        potentialReward={72334}
        challengeEndUnix={newTimestamp}
      />
    </div>
  ))
  .add('Ending soon challenge', () => (
    <div className="p-5">
      <ActiveChallengeCard
        id="42"
        listingOwner="0x86d2fc11be873eca93a083c5cabc38ec59bbc222"
        challenger="0x12a2fc11be873eca93a083c5cabc38ec59bbc987"
        challengerStake={26300}
        potentialReward={72334}
        challengeEndUnix={endingSoonTimestamp}
      />
    </div>
  ));
