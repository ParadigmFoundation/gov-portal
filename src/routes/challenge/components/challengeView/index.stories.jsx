import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ChallengeView from '.';

const deadline = (Date.now() / 1000) + 60 * 60 * 24 * 2;

storiesOf('ChallengeView', module)
  .add('Vote', () => (
    <div className="p-5">
      <ChallengeView
        challengeId={42}
        validatorPublicKey="39C04A480B54AB258A45355A5E48ADDED9956C65"
        address="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        address2="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        deadline={deadline}
        potentialReward={123456.78}
        challengerStake={32912.34}
        keepProposal={action('keep')}
        removeProposal={action('remove')}
        goBack={action('back')}
        status="vote"
      />
    </div>
  ))
  .add('Reveal', () => (
    <div className="p-5">
      <ChallengeView
        challengeId={42}
        validatorPublicKey="39C04A480B54AB258A45355A5E48ADDED9956C65"
        address="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        address2="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        deadline={deadline}
        potentialReward={123456.78}
        challengerStake={32912.34}
        reveal={action('reveal')}
        goBack={action('back')}
        status="reveal"
      />
    </div>
  ))
  .add('Thanks', () => (
    <div className="p-5">
      <ChallengeView
        challengeId={42}
        validatorPublicKey="39C04A480B54AB258A45355A5E48ADDED9956C65"
        address="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        address2="0x09c1e4c1adad99436b5c22a395174a1320ee716b"
        deadline={deadline}
        potentialReward={123456.78}
        challengerStake={32912.34}
        goBack={action('back')}
      />
    </div>
  ));
