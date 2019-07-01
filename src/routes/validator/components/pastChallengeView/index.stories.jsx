import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PastChallengeView from '.';

storiesOf('Routes/Challenge/PastChallengeView', module)
  .add('Proposal not passed', () => (
    <div className="p-5">
      <PastChallengeView
        status={1}
        challengeId={42}
        validator="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        stakeSize={123987.34}
        dailyReward={456}
        passed={false}
        winningTokens={87000}
        voterTotal={100000}
        goBack={action('Back')}
      />
    </div>
  ))
  .add('Proposal passed', () => (
    <div className="p-5">
      <PastChallengeView
        status={1}
        challengeId={42}
        validator="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        stakeSize={123987.34}
        dailyReward={456}
        winningTokens={87000}
        voterTotal={100000}
        goBack={action('Back')}
        passed
      />
    </div>
  ))
  .add('Validator not passed', () => (
    <div className="p-5">
      <PastChallengeView
        status={2}
        challengeId={42}
        validator="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        challenger="0x12c1e4c1adad99436b5c22a395174a1320ee8765"
        stakeSize={123987.34}
        dailyReward={456}
        winningTokens={87000}
        voterTotal={100000}
        goBack={action('Back')}
        passed={false}
      />
    </div>
  ))
  .add('Validator passed', () => (
    <div className="p-5">
      <PastChallengeView
        status={2}
        challengeId={42}
        validator="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        challenger="0x12c1e4c1adad99436b5c22a395174a1320ee8765"
        stakeSize={123987.34}
        dailyReward={456}
        winningTokens={87000}
        voterTotal={100000}
        goBack={action('Back')}
        passed
      />
    </div>
  ));
