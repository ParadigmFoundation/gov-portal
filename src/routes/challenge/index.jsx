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
            /* eslint-disable no-await-in-loop */
            const info = await gov.getChallengeInfo(id);

            const hasRevealedVote = await gov.hasRevealedVote(id);

            let hasVoted = false;

            for (let j = 0; j < activities.length; j += 1) {
              if (activities[j].challengeId === id && activities[j].challenger === coinbase) {
                hasVoted = true;
              }
            }

            const challengeStart = currentChallenges[i].challengeEnd - gov.params.challengePeriod;
            const startRevealBlock = challengeStart + gov.params.commitPeriod;
            const endRevealBlock = currentChallenges[i].challengeEnd;

            const startRevealUnix = await gov.estimateFutureBlockTimestamp(startRevealBlock);
            const startRevealDate = new Date(startRevealUnix * 1000);
            const foo = startRevealDate.toISOString().replace(/-/g, '').replace(/:/g, '').split('.');
            const startReveal = `${foo[0]}Z`;

            const endRevealUnix = await gov.estimateFutureBlockTimestamp(endRevealBlock);
            const endRevealDate = new Date(endRevealUnix * 1000);
            const bar = endRevealDate.toISOString().replace(/-/g, '').replace(/:/g, '').split('.');
            const endReveal = `${bar[0]}Z`;

            const challenge = {
              currentUser,
              challengeId: currentChallenges[i].id,
              challengeType: currentChallenges[i].challengeType,
              validatorPublicKey: currentChallenges[i].validatorPublicKey,
              listingOwner: currentChallenges[i].listingOwner,
              challenger: currentChallenges[i].challenger,
              challengeEnd: currentChallenges[i].challengeEnd,
              challengeEndUnix: currentChallenges[i].challengeEndUnix,
              challengerStake: currentChallenges[i].challengerStake,
              potentialReward: currentChallenges[i].potentialReward,
              challengeDetails: currentChallenges[i].challengeDetails,
              info,
              blockNumber,
              hasVoted,
              startReveal,
              endReveal,
              hasRevealedVote,
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
        hasRevealedVote={challengeData && challengeData.hasRevealedVote}
        currentUser={challengeData && challengeData.currentUser}
        challengeId={challengeData && challengeData.challengeId}
        challengeType={challengeData && challengeData.challengeType}
        validatorPublicKey={challengeData && challengeData.validatorPublicKey}
        listingOwner={challengeData && challengeData.listingOwner}
        challenger={challengeData && challengeData.challenger}
        challengeEndUnix={challengeData && challengeData.challengeEndUnix}
        challengeEnd={challengeData && challengeData.challengeEnd}
        challengerStake={challengeData && challengeData.challengerStake}
        potentialReward={challengeData && challengeData.potentialReward}
        challengeDetails={challengeData && challengeData.challengeDetails}
        blockNumber={challengeData && challengeData.blockNumber}
        info={challengeData && challengeData.info}
        commitVote={async (challengeId, value, tokensToCommit) => {
          await gov.commitVote(challengeId, value, gov.web3.utils.toWei(tokensToCommit));
        }}
        revealVote={() => gov.revealVote(challengeData.challengeId)}
        startReveal={challengeData && challengeData.startReveal}
        endReveal={challengeData && challengeData.endReveal}
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
