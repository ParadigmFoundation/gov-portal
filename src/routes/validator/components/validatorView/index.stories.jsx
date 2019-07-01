import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ValidatorView from '.';

const timestamp = (Date.now() / 1000) - 60 * 60 * 24 * 4;

storiesOf('Routes/Validator/ValidatorView', module)
  .add('Standard', () => (
    <div className="p-5">
      <ValidatorView
        validatorAddress="0x4986f0757174caa968393b30bc97bef22ad2481a"
        validatorPublicKey="39C04A480B54AB258A45355A5E48ADDED9956C65"
        etherscanLink="https://etherscan.io/tx/0xee138a59cbd8f477e6b5c9be6781b642deafc023de2f7740d8de1fc054b3b6b1"
        tokensStaked={123456.78}
        monthlyReward={32456}
        votingPower={12}
        uptime={98}
        rank={45}
        blockNumber={654785}
        confirmationUnix={timestamp}
        challenge={action('Challenge')}
        goBack={action('Go back')}
      />
    </div>
  ))
  .add('Already challenged', () => (
    <div className="p-5">
      <ValidatorView
        validatorName="Validator name"
        validatorAddress="0x4986f0757174caa968393b30bc97bef22ad2481a"
        validatorPublicKey="39C04A480B54AB258A45355A5E48ADDED9956C65"
        etherscanLink="https://etherscan.io/tx/0xee138a59cbd8f477e6b5c9be6781b642deafc023de2f7740d8de1fc054b3b6b1"
        tokensStaked={123456.78}
        monthlyReward={32456}
        votingPower={12}
        uptime={98}
        rank={45}
        blockNumber={654785}
        confirmationUnix={timestamp}
        status="alreadyChallenged"
        goBack={action('Go back')}
      />
    </div>
  ))
  .add('Ongoing challenged', () => (
    <div className="p-5">
      <ValidatorView
        validatorName="Validator name"
        validatorAddress="0x4986f0757174caa968393b30bc97bef22ad2481a"
        validatorPublicKey="39C04A480B54AB258A45355A5E48ADDED9956C65"
        etherscanLink="https://etherscan.io/tx/0xee138a59cbd8f477e6b5c9be6781b642deafc023de2f7740d8de1fc054b3b6b1"
        tokensStaked={123456.78}
        monthlyReward={32456}
        votingPower={12}
        uptime={98}
        rank={45}
        blockNumber={654785}
        confirmationUnix={timestamp}
        status="ongoing"
        goBack={action('Go back')}
      />
    </div>
  ));
