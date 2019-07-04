import React from 'react';
import { storiesOf } from '@storybook/react';

import DetailedCard from '.';

import {
  shortenAddress,
} from '../../utils/formatting';

const newDeadline = (Date.now() / 1000) + 60 * 60 * 24 * 8;
const endingSoonDeadline = (Date.now() / 1000) + 6 * 60 * 60;

storiesOf('Components/Detailed Card', module)
  .add('New proposal', () => (
    <div className="p-5">
      <DetailedCard
        id={shortenAddress('0x88c0ec80b76c6c0dcaa951ca1089386f7e4a4a7604ca2b5d5ac0d3d5c9787d42')}
        type="proposal"
        acceptUnix={newDeadline}
      >
        <div>
          Hello!
        </div>
        <div>
          This is a proposal
        </div>
      </DetailedCard>
    </div>
  ))
  .add('Ending soon proposal', () => (
    <div className="p-5">
      <DetailedCard
        id={shortenAddress('0x88c0ec80b76c6c0dcaa951ca1089386f7e4a4a7604ca2b5d5ac0d3d5c9787d42')}
        type="proposal"
        acceptUnix={endingSoonDeadline}
      >
        <div>
          Hello!
        </div>
        <div>
          This is a proposal
        </div>
      </DetailedCard>
    </div>
  ))
  .add('New challenge', () => (
    <div className="p-5">
      <DetailedCard
        id="42"
        type="challenge"
        acceptUnix={newDeadline}
      >
        <div>
          Hello!
        </div>
        <div>
          This is a challenge
        </div>
      </DetailedCard>
    </div>
  ))
  .add('Ending soon challenge', () => (
    <div className="p-5">
      <DetailedCard
        id="42"
        type="challenge"
        acceptUnix={endingSoonDeadline}
      >
        <div>
          Hello!
        </div>
        <div>
          This is a challenge
        </div>
      </DetailedCard>
    </div>
  ));
