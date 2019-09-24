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
    validators,
  } = useContext(GovContext);

  const {
    match: {
      params: {
        id,
      },
    },
  } = props;

  const [validatorData, setValidatorData] = useState();

  useEffect(() => {
    if (validators.length > 0) {
      for (let i = 0; i < validators.length; i += 1) {
        if (validators[i].id === id) {
          const validator = {
            confirmationUnix: validators[i].confirmationUnix,
            dailyReward: validators[i].dailyReward,
            details: validators[i].details,
            owner: validators[i].owner,
            power: validators[i].power,
            stakeSize: validators[i].stakeSize,
          };

          setValidatorData(validator);
        }
      }
    }
  }, [validators]);

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
