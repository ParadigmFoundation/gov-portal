import React from 'react';
import { storiesOf } from '@storybook/react';

import SimpleCard from '.';
import SimpleCardTitle from './components/simpleCardTitle';
import SimpleCardContent from './components/simpleCardContent';
import SimpleCardFooter from './components/simpleCardFooter';

import KosuSymbol from '../symbols/kosuSymbol';

storiesOf('Components/SimpleCard', module)
  .add('Without footer', () => (
    <div className="p-5">
      <SimpleCard>
        <SimpleCardTitle>
          Title
        </SimpleCardTitle>
        <SimpleCardContent>
          Content
        </SimpleCardContent>
      </SimpleCard>
    </div>
  ))
  .add('With footer', () => (
    <div className="p-5">
      <SimpleCard>
        <SimpleCardTitle>
          Title
        </SimpleCardTitle>
        <SimpleCardContent>
          Content
        </SimpleCardContent>
        <SimpleCardFooter>
          Footer
        </SimpleCardFooter>
      </SimpleCard>
    </div>
  ))
  .add('With components', () => (
    <div className="p-5">
      <SimpleCard>
        <SimpleCardTitle>
          Title
        </SimpleCardTitle>
        <SimpleCardContent>
          Content
        </SimpleCardContent>
        <SimpleCardFooter>
          <KosuSymbol />
        </SimpleCardFooter>
      </SimpleCard>
    </div>
  ));
