import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Row,
  Col,
} from 'reactstrap';

import Tooltip from '.';

const text = "Clicking this will submit a transaction that enables you to trade the specified token. This must be done only once per token. If you’re curious and want to learn more about why this is required, click here.";

storiesOf('Components/Tooltip', module)
  .add('Standard', () => (
    <Row className="p-5">
      <Col className="text-center">
        <Tooltip
          text={text}
        />
      </Col>
    </Row>
  ));
