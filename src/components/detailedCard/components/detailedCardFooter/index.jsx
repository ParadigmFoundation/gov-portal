/**
 * Displays the footer of a detailed card
 * TODO: Add the action triggered by the "View" button
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import Button from '../../../button';

import {
  timestampToCountdown,
} from '../../../../utils/formatting';

import './index.scss';

function DetailedCardFooter(props) {
  const {
    type,
    acceptUnix,
  } = props;

  return (
    <div className="detailed-card-footer">
      <Row className="align-items-center">
        <Col>
          <div className="detailed-card-footer__content">
            {type === 'challenge' ? 'Challenge' : 'Proposal'}
            {' '}
            ends in:
          </div>
          <div className="detailed-card-footer__countdown">
            {timestampToCountdown(acceptUnix, true)}
          </div>
        </Col>
        <Col className="text-right">
          <Button
            text="View"
          />
        </Col>
      </Row>
    </div>
  );
}

DetailedCardFooter.propTypes = {
  type: PropTypes.string.isRequired,
  acceptUnix: PropTypes.number.isRequired,
};

export default DetailedCardFooter;
