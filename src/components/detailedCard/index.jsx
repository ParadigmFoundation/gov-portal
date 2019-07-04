import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
} from 'reactstrap';

import DetailedCardHeader from './components/detailedCardHeader';
import DetailedCardFooter from './components/detailedCardFooter';

import './index.scss';

function DetailedCard(props) {
  const {
    id,
    type,
    acceptUnix,
    children,
  } = props;

  return (
    <div className="detailed-card">
      <DetailedCardHeader
        id={id}
        type={type}
        acceptUnix={acceptUnix}
      />
      <Row className="pb-4">
        <Col>
          {children.map(child => child)}
        </Col>
      </Row>
      <DetailedCardFooter
        type={type}
        acceptUnix={acceptUnix}
      />
    </div>
  );
}

DetailedCard.propTypes = {
  type: PropTypes.oneOf(['challenge', 'proposal']).isRequired,
  id: PropTypes.string.isRequired,
  acceptUnix: PropTypes.number.isRequired,
  children: PropTypes.oneOfType(
    [PropTypes.element, PropTypes.arrayOf(PropTypes.element)],
  ).isRequired,
};

export default DetailedCard;
