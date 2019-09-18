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
    govActivities,
    coinbase,
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
        const currentChallenges = await gov.currentChallenges();
        const blockNumber = await gov.currentBlockNumber();

        for (let i = 0; i < Object.keys(currentChallenges).length; i += 1) {
          if (currentChallenges[Object.keys(currentChallenges)[i]].challengeId.toString() === id) {
            const info = await gov.getChallengeInfo(id);

            let hasVoted = false;

            for (let j = 0; j < govActivities.length; j += 1) {
              if (govActivities[j].challengeId === id && govActivities[j].challenger === coinbase) {
                hasVoted = true;
              }
            }

            const challenge = {
              currentUser,
              challengeId: currentChallenges[Object.keys(currentChallenges)[i]].challengeId.toString(),
              challengeType: currentChallenges[Object.keys(currentChallenges)[i]].challengeType,
              validatorPublicKey: Object.keys(currentChallenges)[i],
              listingOwner: currentChallenges[Object.keys(currentChallenges)[i]].listingOwner,
              challenger: currentChallenges[Object.keys(currentChallenges)[i]].challenger,
              challengeEndUnix: currentChallenges[Object.keys(currentChallenges)[i]].challengeEndUnix,
              challengerStake: gov.web3.utils.fromWei(
                currentChallenges[Object.keys(currentChallenges)[i]].challengerStake.toString(),
              ),
              potentialReward: gov.web3.utils.fromWei(
                currentChallenges[Object.keys(currentChallenges)[i]].challengerStake.multipliedBy(gov.web3.utils.toBN(70)).div(gov.web3.utils.toBN(100)).toString(),
              ),
              challengeDetails: currentChallenges[Object.keys(currentChallenges)[i]].challengeDetails,
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
  }, [isReady, gov, id, govActivities]);

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
