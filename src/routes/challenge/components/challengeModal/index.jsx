import React, {
  useState,
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

  return (
    <div>
      <Modal className="challenge-modal" isOpen={isOpen} toggle={close}>
        <ModalBody className="challenge-modal__body">
          <Row className="pb-5">
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
            <Col className="challenge-modal__close" xs={2}>
              <CloseIcon action={close} />
            </Col>
          </Row>
          <Row className="pb-5">
            <Col>
              <div className="challenge-modal__content">
                Enter the amount of tokens you want to commit to this vote below:
              </div>
            </Col>
          </Row>
          <Row className="pb-5">
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
          <Row>
            <Col>
              <Button
                text="Cancel"
                color="cancel"
                action={close}
              />
            </Col>
            <Col>
              <Button
                text="Confirm vote"
                color="green"
                action={() => commitVote(challengeId, value, tokensToCommit)}
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
