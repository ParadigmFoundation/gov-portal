import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Modal,
  ModalBody,
} from 'reactstrap';

import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Button from '../../../../components/button';
import WarningSign from '../../../../components/warningSign';

function ProposalChallengeModal(props) {
  const {
    isOpen,
    price,
    close,
    challenge,
  } = props;

  return (
    <Modal className="proposal-challenge-modal" isOpen={isOpen}>
      <ModalBody className="proposal-challenge-modal__body">
        <Row>
          <Col>
            <div className="proposal-challenge-modal__close">
              X
            </div>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <div className="proposal-challenge-modal__header">
              Challenge proposal
            </div>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <div className="proposal-challenge-modal__cost-label">
              This challenge will cost:
            </div>
            <div className="proposal-challenge-modal__price">
              {price}
            </div>
            {' '}
            <KosuSymbol />
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <textarea
              className="proposal-challenge-modal__reason-input"
              placeholder="Enter your reasons for challenging this proposal here."
              rows="4"
            />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <div className="proposal-challenge-modal__warning">
              <div className="proposal-challenge-modal__warning-title">
                <WarningSign />
                {' '}
                Warning
              </div>
              <div className="proposal-challenge-modal__warning-content">
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

ProposalChallengeModal.propTypes = {
  isOpen: PropTypes.bool,
  price: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired,
  challenge: PropTypes.func.isRequired,
};

ProposalChallengeModal.defaultProps = {
  isOpen: false,
};

export default ProposalChallengeModal;
