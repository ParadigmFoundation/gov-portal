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

import ProgressBar from '../../../../components/progressBar';
import Button from '../../../../components/button';
import CloseIcon from '../../../../components/closeIcon';
import ArrowRightSrc from '../../../../assets/img/arrow-right.png';

import './index.scss';

function TreasuryBalanceModal(props) {
  const {
    currentBalance,
    isOpen,
    toggle,
    updateBalance,
  } = props;

  const [newBalance, setNewBalance] = useState('0');

  return (
    <Modal className="treasure-balance-modal" isOpen={isOpen} toggle={toggle}>
      <ModalBody className="treasure-balance-modal__body">
        <Row className="pb-5">
          <Col>
            <div className="treasure-balance-modal__header">
              Treasury
            </div>
          </Col>
          <Col className="text-right">
            <CloseIcon action={toggle} />
          </Col>
        </Row>
        <Row className="px-5 pb-3">
          <Col>
            <div className="treasure-balance-modal__label">
              Current balance
            </div>
            <div className="treasure-balance-modal__current-balance">
              {currentBalance}
            </div>
          </Col>
        </Row>
        <Row className="px-5">
          <Col>
            <div className="treasure-balance-modal__label">
              New balance
            </div>
          </Col>
          <Col xs={2} />
          <Col>
            <div className="treasure-balance-modal__label">
              Difference
            </div>
          </Col>
        </Row>
        <Row className="align-items-center px-5">
          <Col>
            <input
              placeholder={0}
              type="text"
              value={newBalance}
              onChange={e => setNewBalance(e.target.value)}
              className="treasure-balance-modal__input"
              min="0"
            />
          </Col>
          <Col xs={2}>
            <img src={ArrowRightSrc} alt="arrow-right" width="100%" />
          </Col>
          <Col>
            <div className="treasure-balance-modal__difference">
              {newBalance - currentBalance}
            </div>
          </Col>
        </Row>
        <Row className="p-5">
          <Col xs={12} sm={6}>
            <ProgressBar
              max={parseInt(currentBalance, 10)}
              value={parseInt(newBalance, 10)}
            />
          </Col>
        </Row>
        <Row>
          <Col className="text-left">
            <Button
              color="inverted"
              text="Cancel"
              action={toggle}
            />
          </Col>
          <Col className="text-right">
            <Button
              color="green"
              text="Update balance"
              action={() => updateBalance(newBalance)}
            />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

TreasuryBalanceModal.propTypes = {
  currentBalance: PropTypes.string,
  isOpen: PropTypes.bool,
  updateBalance: PropTypes.func,
  toggle: PropTypes.func.isRequired,
};

TreasuryBalanceModal.defaultProps = {
  updateBalance: () => {},
  currentBalance: '0',
  isOpen: false,
};

export default TreasuryBalanceModal;
