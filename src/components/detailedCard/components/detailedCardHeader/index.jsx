import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import './index.scss';

import {
  getTimestampBadge,
} from '../../../../utils/formatting';

function DetailedCardHeader(props) {
  const {
    id,
    acceptUnix,
  } = props;

  function displayTimestampBadge(timestamp) {
    if (getTimestampBadge(timestamp) === 'endingSoon') {
      return (
        <Col>
          <div
            className="detailed-card-header__timestamp-badge detailed-card-header__timestamp-badge--ending-soon"
          >
            Ending soon
          </div>
        </Col>
      );
    }

    if (getTimestampBadge(timestamp) === 'newProposal') {
      return (
        <Col>
          <div
            className="detailed-card-header__timestamp-badge detailed-card-header__timestamp-badge--new-proposal"
          >
            New proposal
          </div>
        </Col>
      );
    }

    return null;
  }

  return (
    <div className="detailed-card-header">
      <Row className="pb-4 align-items-center">
        <Col>
          <div className="detailed-card-header__id">
            {id}
          </div>
        </Col>
        {displayTimestampBadge(acceptUnix)}
      </Row>
    </div>
  );
}

DetailedCardHeader.propTypes = {
  acceptUnix: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailedCardHeader;
