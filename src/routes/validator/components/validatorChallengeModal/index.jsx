import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Modal,
  ModalBody,
} from 'reactstrap';
import numeral from 'numeral';

import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Button from '../../../../components/button';

import warningSign from '../../../../assets/img/warning.png';

import './index.scss';

function ValidatorChallengeModal(props) {
  const {
    id,
    isOpen,
    price,
    close,
    challengeListing,
  } = props;

  const [details, setDetails] = useState('');

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
              {numeral(price).format('0,0.0')}
            </div>
            {' '}
            <KosuSymbol />
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <textarea
              value={details}
              onChange={e => setDetails(e.target.value)}
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
                <img src={warningSign} width={18} alt="Warning" />
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
              action={() => challengeListing(id, details)}
              block
            />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

ValidatorChallengeModal.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  price: PropTypes.string,
  close: PropTypes.func.isRequired,
  challengeListing: PropTypes.func,
};

ValidatorChallengeModal.defaultProps = {
  id: '',
  isOpen: false,
  price: '0',
  challengeListing: () => {},
};

export default ValidatorChallengeModal;
