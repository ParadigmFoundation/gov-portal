import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import GovContext from '../../store/govContext';

import ValidatorView from './components/validatorView';

function Validator(props) {
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

  const [validatorData, setValidatorData] = useState();

  useEffect(() => {
    async function fetchData() {
      if (isReady && id !== '') {
        const currentValidators = await gov.currentValidators();

        for (let i = 0; i < Object.keys(currentValidators).length; i += 1) {
          if (Object.keys(currentValidators)[i] === id) {
            const validator = {
              confirmationUnix: Object.values(currentValidators)[i].confirmationUnix,
              dailyReward: gov.web3.utils.fromWei(
                Object.values(currentValidators)[i].dailyReward.toString(),
              ),
              details: Object.values(currentValidators)[i].details,
              owner: Object.values(currentValidators)[i].owner,
              power: gov.web3.utils.fromWei(Object.values(currentValidators)[i].power.toString()),
              stakeSize: gov.web3.utils.fromWei(
                Object.values(currentValidators)[i].stakeSize.toString(),
              ),
            };

            setValidatorData(validator);
          }
        }
      }
    }

    fetchData();
  }, [isReady, gov, id]);

  return (
    <>
      <ValidatorView
        id={id}
        confirmationUnix={validatorData && validatorData.confirmationUnix}
        dailyReward={validatorData && validatorData.dailyReward}
        details={validatorData && validatorData.details}
        owner={validatorData && validatorData.owner}
        power={validatorData && validatorData.power}
        stakeSize={validatorData && validatorData.stakeSize}
        challengeListing={isReady ? gov.kosu.validatorRegistry.challengeListing : () => {}}
      />
    </>
  );
}

Validator.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Validator;
