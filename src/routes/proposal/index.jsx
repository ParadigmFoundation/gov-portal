import React, {
  useContext,
  useState,
  useEffect,
} from 'react';
import {
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import GovContext from '../../store/govContext';

import ProposalView from './components/proposalView';

function Proposal(props) {
  const {
    gov,
    isReady,
    walletBalance,
  } = useContext(GovContext);

  const {
    match: {
      params: {
        id,
      },
    },
  } = props;

  const [proposalData, setProposalData] = useState();
  const [redirectTo, setRedirectTo] = useState(false);

  function redirect() {
    if (redirectTo) {
      return <Redirect push to="/" />;
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (isReady && id !== '') {
        if (gov.proposals[id] !== undefined) {
          const dailyReward = gov.proposals[id].dailyReward.toString().split('.');

          setProposalData({
            ...gov.proposals[id],
            dailyReward: dailyReward[0],
          });
        }
      }
    }

    fetchData();
  }, [isReady, gov, id]);

  return (
    <>
      {redirect()}
      <ProposalView
        id={id}
        acceptUnix={proposalData && proposalData.acceptUnix}
        dailyReward={proposalData && gov.web3.utils.fromWei(proposalData.dailyReward.toString())}
        details={proposalData && proposalData.details}
        owner={proposalData && proposalData.owner}
        power={proposalData && proposalData.power.toString()}
        stakeSize={proposalData && gov.web3.utils.fromWei(proposalData.stakeSize.toString())}
        challengeProposal={async (listingKey, details) => {
          await gov.kosu.validatorRegistry.challengeListing(listingKey, details);
          setRedirectTo(true);
        }}
        walletBalance={walletBalance}
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
