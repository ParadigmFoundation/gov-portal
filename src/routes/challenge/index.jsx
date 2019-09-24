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
    activities,
    coinbase,
    activeChallenges,
  } = useContext(GovContext);

  const {
    match: {
      params: {
        id,
      },
    },
  } = props;

  const [challengeData, setChallengeData] = useState();

  useEffect(() => {
    async function fetchData() {
      if (isReady && id !== '') {
        const currentUser = coinbase;
        const currentChallenges = activeChallenges;
        const blockNumber = await gov.currentBlockNumber();

        for (let i = 0; i < currentChallenges.length; i += 1) {
          if (currentChallenges[i].id === id) {
            // eslint-disable-next-line no-await-in-loop
            const info = await gov.getChallengeInfo(id);

            let hasVoted = false;

            for (let j = 0; j < activities.length; j += 1) {
              if (activities[j].challengeId === id && activities[j].challenger === coinbase) {
                hasVoted = true;
              }
            }

            const challenge = {
              currentUser,
              challengeId: currentChallenges[i].id,
              challengeType: currentChallenges[i].challengeType,
              validatorPublicKey: currentChallenges[i].validatorPublicKey,
              listingOwner: currentChallenges[i].listingOwner,
              challenger: currentChallenges[i].challenger,
              challengeEndUnix: currentChallenges[i].challengeEndUnix,
              challengerStake: currentChallenges[i].challengerStake,
              potentialReward: currentChallenges[i].potentialReward,
              challengeDetails: currentChallenges[i].challengeDetails,
              info,
              blockNumber,
              hasVoted,
            };

            setChallengeData(challenge);
          }
        }
      }
    }

    fetchData();
  }, [isReady, gov, id, activities]);

  return (
    <>
      <ChallengeView
        hasVoted={challengeData && challengeData.hasVoted}
        currentUser={challengeData && challengeData.currentUser}
        challengeId={challengeData && challengeData.challengeId}
        challengeType={challengeData && challengeData.challengeType}
        validatorPublicKey={challengeData && challengeData.validatorPublicKey}
        listingOwner={challengeData && challengeData.listingOwner}
        challenger={challengeData && challengeData.challenger}
        challengeEndUnix={challengeData && challengeData.challengeEndUnix}
        challengerStake={challengeData && challengeData.challengerStake}
        potentialReward={challengeData && challengeData.potentialReward}
        challengeDetails={challengeData && challengeData.challengeDetails}
        blockNumber={challengeData && challengeData.blockNumber}
        info={challengeData && challengeData.info}
        commitVote={(challengeId, value, tokensToCommit) => {
          gov.commitVote(challengeId, value, gov.web3.utils.toWei(tokensToCommit));
        }}
        revealVote={() => gov.revealVote(challengeData.challengeId)}
      />
    </>
  );
}

Challenge.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Challenge;
