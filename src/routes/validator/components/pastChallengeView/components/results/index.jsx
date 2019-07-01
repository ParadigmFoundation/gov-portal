import React from 'react';
import PropTypes from 'prop-types';
import {
  Progress,
} from 'reactstrap';

import './index.scss';

function Results(props) {
  const {
    voterTotal,
    winningTokens,
    passed,
  } = props;

  return (
    <div className="results">
      <div className="results__legend-label results__legend-label--left">
        No
      </div>
      <div className="results__legend-label results__legend-label--right">
        Yes
      </div>
      <div className="results__legend-amount results__legend-label--left">
        {passed ? voterTotal - winningTokens : winningTokens}
        {' '}
        KOSU
      </div>
      <div className="results__legend-amount results__legend-label--right">
        {passed ? winningTokens : voterTotal - winningTokens}
        {' '}
        KOSU
      </div>
      <Progress
        className="results__progress"
        value={passed ? (
          100 - (winningTokens / voterTotal * 100)
        ) : (
          (winningTokens / voterTotal * 100)
        )}
      />
    </div>
  );
}

Results.propTypes = {
  voterTotal: PropTypes.number.isRequired,
  winningTokens: PropTypes.number.isRequired,
  passed: PropTypes.bool,
};

Results.defaultProps = {
  passed: false,
};

export default Results;
