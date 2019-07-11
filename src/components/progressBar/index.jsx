import React from 'react';
import PropTypes from 'prop-types';
import {
  Progress,
  Row,
  Col,
} from 'reactstrap';

import './index.scss';

function ProgressBar(props) {
  const {
    value,
  } = props;

  function getClassName(v) {
    let className = 'my-progress-bar__label';

    if (v > value) {
      className += ' my-progress-bar__label--light';
    }

    return className;
  }

  return (
    <div className="my-progress-bar">
      <Row className="pb-2">
        <Col>
          <Progress
            className="my-progress-bar__bar"
            max={100}
            value={value}
          />
        </Col>
      </Row>
      <Row>
        <Col className="text-left">
          <div className={getClassName(0)}>
            0%
          </div>
        </Col>
        <Col className="text-left">
          <div className={getClassName(25)}>
            25%
          </div>
        </Col>
        <Col className="text-center p-0">
          <div className={getClassName(50)}>
            50%
          </div>
        </Col>
        <Col className="text-right">
          <div className={getClassName(75)}>
            75%
          </div>
        </Col>
        <Col className="text-right">
          <div className={getClassName(100)}>
            100%
          </div>
        </Col>
      </Row>
    </div>

  );
}

ProgressBar.propTypes = {
  value: PropTypes.number,
};

ProgressBar.defaultProps = {
  value: 0,
};

export default ProgressBar;
