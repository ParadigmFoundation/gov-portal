import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  Row,
  Col,
} from 'reactstrap';

import KosuSymbol from '../../../../components/kosuSymbol';
import Button from '../../../../components/button';

function ChallengeModal(props) {
  const {
    isOpen,
    address,
    close,
    confirmVote,
  } = props;

  const shortAddress = `${address.substring(0, 8)}...${address.substring(address.length - 8, address.length)}`;

  return (
    <div>
      <Modal className="challenge-modal" isOpen={isOpen}>
        <ModalBody className="challenge-modal__body">
          <Row>
            <Col className="challenge-modal__close">
              X
            </Col>
          </Row>
          <Row className="pb-5">
            <Col>
              <div className="challenge-modal__header">
                {`Vote to keep ${shortAddress}.`}
              </div>
            </Col>
          </Row>
          <Row className="pb-4">
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
                text="Close"
                color="inverted"
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
