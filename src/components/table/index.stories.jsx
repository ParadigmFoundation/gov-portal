import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '.';

storiesOf('Table', module)
  .add('Standard', () => (
    <div className="p-5">
      <Table>
        <thead>
          <tr>
            <th>Foo</th>
            <th>Bar</th>
            <th>Moo</th>
            <th>Beef</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foo</td>
            <td>Bar</td>
            <td>Moo</td>
            <td>Beef</td>
          </tr>
          <tr>
            <td>Foo</td>
            <td>Bar</td>
            <td>Moo</td>
            <td>Beef</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ));
