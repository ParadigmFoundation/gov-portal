import React, {
  useContext,
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import GovContext from '../../store/govContext';

import PastChallengeView from './components/pastChallengeView';

function Past(props) {
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

  const [pastChallengeData, setPastChallengeData] = useState();

  useEffect(() => {
    async function fetchData() {
      if (isReady && id !== '') {
        const pastChallenges = await gov.getHistoricalChallenges();

        if (pastChallenges[id]) {
          console.log(pastChallenges[id]);

          const dailyReward = await gov._estimateDailyReward(pastChallenges[id].listingSnapshot.rewardRate);

          const pastChallenge = {
            listingKey: pastChallenges[id].listingKey,
            owner: pastChallenges[id].listingSnapshot.owner,
            challenger: pastChallenges[id].challenger,
            balance: gov.web3.utils.fromWei(pastChallenges[id].balance.toString()),
            challengeEnd: pastChallenges[id].balance.toString(),
            finalized: pastChallenges[id].finalized,
            passed: pastChallenges[id].passed,
            pollId: pastChallenges[id].pollId.toString(),
            voterTotal: pastChallenges[id].voterTotal.toNumber(),
            winningTokens: pastChallenges[id].winningTokens.toNumber(),
            dailyReward: gov.web3.utils.fromWei(dailyReward.toString()),
            status: pastChallenges[id].listingSnapshot.status,
            stakeSize: gov.web3.utils.fromWei(
              pastChallenges[id].listingSnapshot.stakedBalance.toString(),
            ),
          };

          setPastChallengeData(pastChallenge);
        } else {
          console.log('Challenge does not exist');
        }
      }
    }

    fetchData();
  }, [isReady, id, gov]);

  return (
    <>
      <PastChallengeView
        challengeId={id}
        status={pastChallengeData && pastChallengeData.status}
        owner={pastChallengeData && pastChallengeData.owner}
        challenger={pastChallengeData && pastChallengeData.challenger}
        stakeSize={pastChallengeData && pastChallengeData.stakeSize}
        dailyReward={pastChallengeData && pastChallengeData.dailyReward}
        passed={pastChallengeData && pastChallengeData.passed}
        winningTokens={pastChallengeData && pastChallengeData.winningTokens}
        voterTotal={pastChallengeData && pastChallengeData.voterTotal}
      />
    </>
  );
}

Past.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Past;
