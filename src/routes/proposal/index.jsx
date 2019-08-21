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
    match: {
      params: {
        id,
      },
    },
  } = props;

  useEffect(() => {
    document.title = 'Governance | Paradigm';
  }, []);

  const [proposalData, setProposalData] = useState();

  useEffect(() => {
    async function fetchData() {
      if (isReady && id !== '') {
        if (gov.proposals[id] !== undefined) {
          setProposalData(gov.proposals[id]);
        }
      }
    }

    fetchData();
  }, [isReady, gov.proposals, id]);

  return (
    <>
      <ProposalView
        id={id}
        acceptUnix={proposalData && proposalData.acceptUnix}
        dailyReward={proposalData && gov.web3.utils.fromWei(proposalData.dailyReward.toString())}
        details={proposalData && proposalData.details}
        owner={proposalData && proposalData.owner}
        power={proposalData && proposalData.power.toString()}
        stakeSize={proposalData && gov.web3.utils.fromWei(proposalData.stakeSize.toString())}
        challengeProposal={(listingKey, details) => gov.kosu.validatorRegistry.challengeListing(listingKey, details)}
      />
    </>
  );
}

Proposal.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Proposal;
