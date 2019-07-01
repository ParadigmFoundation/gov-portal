import React from 'react';
import { storiesOf } from '@storybook/react';

import Results from '.';

storiesOf('Routes/Challenge/Results', module)
  .add('Results passed', () => (
    <div className="p-5">
      <Results
        winningTokens={87000}
        voterTotal={100000}
        passed
      />
    </div>
  ))
  .add('Results not passed', () => (
    <div className="p-5">
      <Results
        winningTokens={87000}
        voterTotal={100000}
      />
    </div>
  ));
