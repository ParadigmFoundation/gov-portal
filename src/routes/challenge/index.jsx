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
        const currentChallenges = await gov.currentChallenges();
        const currentBlock = await gov.currentBlockNumber();

        for (let i = 0; i < Object.keys(currentChallenges).length; i += 1) {
          if (currentChallenges[Object.keys(currentChallenges)[i]].challengeId.toString() === id) {
            console.log(currentChallenges[Object.keys(currentChallenges)[i]]);

            const info = await gov.getChallengeInfo(id);

            const challenge = {
              challengeId: currentChallenges[Object.keys(currentChallenges)[i]].challengeId.toString(),
              validatorPublicKey: Object.keys(currentChallenges)[i],
              listingOwner: currentChallenges[Object.keys(currentChallenges)[i]].listingOwner,
              challenger: currentChallenges[Object.keys(currentChallenges)[i]].challenger,
              challengeEndUnix: currentChallenges[Object.keys(currentChallenges)[i]].challengeEndUnix,
              challengerStake: gov.web3.utils.fromWei(
                currentChallenges[Object.keys(currentChallenges)[i]].challengerStake.toString(),
              ),
              potentialReward: gov.web3.utils.fromWei(
                currentChallenges[Object.keys(currentChallenges)[i]].challengerStake.multipliedBy(gov.web3.utils.toBN(30)).div(gov.web3.utils.toBN(100)).toString(),
              ),
              challengeDetails: currentChallenges[Object.keys(currentChallenges)[i]].challengeDetails,
              info,
              currentBlock,
            };

            setChallengeData(challenge);
          } else {
            console.log('Challenge does not exist');
          }
        }
      }
    }

    fetchData();
  }, [isReady, gov, id]);

  return (
    <>
      <ChallengeView
        challengeId={challengeData && challengeData.challengeId}
        validatorPublicKey={challengeData && challengeData.validatorPublicKey}
        listingOwner={challengeData && challengeData.listingOwner}
        challenger={challengeData && challengeData.challenger}
        challengeEndUnix={challengeData && challengeData.challengeEndUnix}
        challengerStake={challengeData && challengeData.challengerStake}
        potentialReward={challengeData && challengeData.potentialReward}
        challengeDetails={challengeData && challengeData.challengeDetails}
        challengeType={challengeData && challengeData.challengeType}
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
