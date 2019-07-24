import React, {
  useContext,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import GovContext from '../../store/govContext';

import ProposalView from './components/proposalView';

function Proposal(props) {
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
        console.log('Fetching data for Proposal:', id);
      }
    }

    fetchData();
  }, [isReady]);

  return (
    <>
      <ProposalView

      />
    </>
  );
}

Proposal.propTypes = {
  id: PropTypes.string,
};

Proposal.defaultProps = {
  id: '',
};

export default Proposal;
