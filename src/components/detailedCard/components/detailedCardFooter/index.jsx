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

import Link from '../../../link';

import {
  timestampToCountdown,
} from '../../../../utils/formatting';

import './index.scss';

function DetailedCardFooter(props) {
  const {
    id,
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
          <Link
            text="View"
            to={`/${type}/${id}`}
          />
        </Col>
      </Row>
    </div>
  );
}

DetailedCardFooter.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['challenge', 'proposal']).isRequired,
  acceptUnix: PropTypes.number.isRequired,
};

export default DetailedCardFooter;
