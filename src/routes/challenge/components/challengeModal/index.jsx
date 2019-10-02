import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  Row,
  Col,
} from 'reactstrap';

import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Button from '../../../../components/button';
import CloseIcon from '../../../../components/closeIcon';

import {
  shortenAddress,
} from '../../../../utils/formatting';

import './index.scss';

function ChallengeModal(props) {
  const {
    isOpen,
    address,
    close,
    commitVote,
    value,
    challengeId,
  } = props;

  const [tokensToCommit, setTokensToCommit] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setTokensToCommit('');
    }
  }, [isOpen]);

  return (
    <div>
      <Modal className="challenge-modal" isOpen={isOpen} toggle={close}>
        <ModalBody className="challenge-modal__body">
          <Row className="pb-5 px-3 pt-1">
            <Col>
              <div className="challenge-modal__header">
                {value === '1' ? 'Vote to remove' : 'Vote to keep'}
                {' '}
                <span className="challenge-modal__header-address">
                  {shortenAddress(address)}
                </span>
                .
              </div>
            </Col>
            <Col xs={2} className="text-right">
              <CloseIcon action={close} />
            </Col>
          </Row>
          <Row className="px-3 pb-3">
            <Col>
              <div className="challenge-modal__content">
                Enter the amount of tokens you want to commit to this vote below:
              </div>
            </Col>
          </Row>
          <Row className="pb-5 justify-content-center px-3">
            <Col>
              <input
                type="number"
                className="challenge-modal__amount"
                value={tokensToCommit}
                onChange={e => setTokensToCommit(e.target.value)}
              />
              <KosuSymbol />
            </Col>
          </Row>
          <Row className="px-3 pb-1">
            <Col className="text-left" xs={12} sm={6}>
              <Button
                text="Cancel"
                color="cancel"
                action={close}
              />
            </Col>
            <Col className="text-right" xs={12} sm={6}>
              <Button
                text="Confirm vote"
                color="green"
                action={() => commitVote(challengeId, value, tokensToCommit)}
                disabled={tokensToCommit === '' || tokensToCommit === '0'}
                block
                isAsync
                onceConfirmed={close}
              />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}

ChallengeModal.propTypes = {
  isOpen: PropTypes.bool,
  address: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  commitVote: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  challengeId: PropTypes.string.isRequired,
};

ChallengeModal.defaultProps = {
  isOpen: false,
};

export default ChallengeModal;
