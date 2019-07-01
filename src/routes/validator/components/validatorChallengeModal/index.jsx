import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Modal,
  ModalBody,
} from 'reactstrap';

import KosuSymbol from '../../../../components/kosuSymbol';
import Button from '../../../../components/button';
import WarningSign from '../../../../components/warningSign';

function ValidatorChallengeModal(props) {
  const {
    isOpen,
    price,
    close,
    challenge,
  } = props;

  return (
    <Modal className="validator-challenge-modal" isOpen={isOpen}>
      <ModalBody className="alidator-challenge-modal__body">
        <Row>
          <Col>
            <div className="validator-challenge-modal__close">
              X
            </div>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <div className="validator-challenge-modal__header">
              Challenge validator
            </div>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <div className="validator-challenge-modal__cost-label">
              This challenge will cost:
            </div>
            <div className="validator-challenge-modal__price">
              {price}
            </div>
            {' '}
            <KosuSymbol />
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <textarea
              className="validator-challenge-modal__reason-input"
              placeholder="Enter your reasons for challenging this proposal here."
              rows="4"
            />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <div className="validator-challenge-modal__warning">
              <div className="validator-challenge-modal__warning-title">
                <WarningSign />
                {' '}
                Warning
              </div>
              <div className="validator-challenge-modal__warning-content">
                You are not guaranteed to win this challenge. If you are unsuccessful, you risk losing your tokens used to challenge this proposal.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              color="inverted"
              text="Close"
              action={close}
            />
          </Col>
          <Col>
            <Button
              color="green"
              text="Challenge"
              action={challenge}
              block
            />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

ValidatorChallengeModal.propTypes = {
  isOpen: PropTypes.bool,
  price: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
  challenge: PropTypes.func.isRequired,
};

ValidatorChallengeModal.defaultProps = {
  isOpen: false,
};

export default ValidatorChallengeModal;