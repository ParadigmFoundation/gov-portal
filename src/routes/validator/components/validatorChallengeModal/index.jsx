import React, {
  useState, useEffect,
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
import CloseIcon from '../../../../components/closeIcon';

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

  useEffect(() => {
    if (!isOpen) {
      setDetails('');
    }
  }, [isOpen]);

  return (
    <Modal className="validator-challenge-modal" isOpen={isOpen} toggle={close}>
      <ModalBody className="validator-challenge-modal__body">
        <Row className="pb-5 px-3 pt-1">
          <Col>
            <div className="validator-challenge-modal__header">
              Challenge validator
            </div>
          </Col>
          <Col xs={2} className="validator-challenge-modal__close">
            <CloseIcon action={close} />
          </Col>
        </Row>
        <Row className="pb-4 px-3">
          <Col>
            <div className="validator-challenge-modal__cost-label">
              This challenge will cost:
            </div>
            <div className="validator-challenge-modal__price">
              {numeral(price).format('0,0.[00]')}
            </div>
            {' '}
            <KosuSymbol />
          </Col>
        </Row>
        <Row className="pb-4 px-3 pt-1">
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
        <Row className="pb-5 px-3">
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
        <Row className="px-3">
          <Col>
            <Button
              color="cancel"
              text="Cancel"
              action={close}
            />
          </Col>
          <Col>
            <Button
              color="green"
              text="Challenge"
              action={() => challengeListing(id, details)}
              onceConfirmed={close}
              block
              isAsync
              disabled={details === ''}
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
