import React from 'react';
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
    confirmVote,
  } = props;

  return (
    <div>
      <Modal className="challenge-modal" isOpen={isOpen}>
        <Row>
          <Col className="challenge-modal__close">
            <CloseIcon action={close} />
          </Col>
        </Row>
        <ModalBody className="challenge-modal__body">
          <Row className="pb-5">
            <Col>
              <div className="challenge-modal__header">
                Vote to keep
                {' '}
                <span className="challenge-modal__header-address">
                  {shortenAddress(address)}
                </span>
                .
              </div>
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
                action={confirmVote}
                block
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
  confirmVote: PropTypes.func.isRequired,
};

ChallengeModal.defaultProps = {
  isOpen: false,
};

export default ChallengeModal;
