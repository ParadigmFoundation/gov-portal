import React, {
  useContext,
  useEffect,
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
    id,
  } = props.match.params;

  // const [validatorData, setValidatorData] = useState();

  useEffect(() => {
    async function fetchData() {
      if (isReady && id !== '') {
        const currentValidators = await gov.currentValidators();

        for (let i = 0; i < Object.keys(currentValidators).length; i += 1) {
          if (Object.keys(currentValidators)[i] === id) {
            console.log(Object.keys(currentValidators)[i]);
          }
        }
      }
    }

    fetchData();
  }, [isReady, gov, id]);

  return (
    <>
      <ValidatorView />
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
