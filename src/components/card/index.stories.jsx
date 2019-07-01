import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '.';
import CardTitle from './components/cardTitle';
import CardContent from './components/cardContent';
import CardFooter from './components/cardFooter';

import KosuSymbol from '../symbols/kosuSymbol';

storiesOf('Components/Card', module)
  .add('Without footer', () => (
    <div className="p-5">
      <Card>
        <CardTitle>
          Title
        </CardTitle>
        <CardContent>
          Content
        </CardContent>
      </Card>
    </div>
  ))
  .add('With footer', () => (
    <div className="p-5">
      <Card>
        <CardTitle>
          Title
        </CardTitle>
        <CardContent>
          Content
        </CardContent>
        <CardFooter>
          Footer
        </CardFooter>
      </Card>
    </div>
  ))
  .add('With components', () => (
    <div className="p-5">
      <Card>
        <CardTitle>
          Title
        </CardTitle>
        <CardContent>
          Content
        </CardContent>
        <CardFooter>
          <KosuSymbol />
        </CardFooter>
      </Card>
    </div>
  ));
