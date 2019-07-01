import React from 'react';
import { storiesOf } from '@storybook/react';

import AcceptedSymbol from '../symbols/acceptedSymbol';
import RejectedSymbol from '../symbols/rejectedSymbol';

import Table from '.';

storiesOf('Components/Table', module)
  .add('Text content', () => (
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
  ))
  .add('Components content', () => (
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
            <td>
              <AcceptedSymbol />
            </td>
            <td>Bar</td>
            <td>
              <RejectedSymbol />
            </td>
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
