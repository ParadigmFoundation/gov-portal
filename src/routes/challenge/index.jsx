import React, {
  useContext,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import GovContext from '../../store/govContext';

import ChallengeView from './components/challengeView';

function Challenge(props) {
  const {
    gov,
    isReady,
  } = useContext(GovContext);

  const {
    id,
  } = props.match.params;

  useEffect(() => {
    async function fetchData() {
      if (isReady && id !== '') {
        // TODO: fetch the data for the current proposal here
        console.log('Fetching data for Challenge:', id);
      }
    }

    fetchData();
  }, [isReady]);

  return (
    <>
      <ChallengeView

      />
    </>
  );
}

Challenge.propTypes = {
  id: PropTypes.string,
};

Challenge.defaultProps = {
  id: '',
};

export default Challenge;
