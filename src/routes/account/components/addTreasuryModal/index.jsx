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

import './index.scss';

function AddTreasuryModal(props) {
  const {
    isOpen,
    toggle,
    add,
    walletBalance,
  } = props;

  const [tokensToAdd, setTokensToAdd] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setTokensToAdd('');
    }
  }, [isOpen]);

  return (
    <Modal className="add-treasury-modal" isOpen={isOpen} toggle={toggle}>
      <ModalBody className="add-treasury-modal__body">
        <Row className="pb-5 px-3 pt-1">
          <Col>
            <div className="add-treasury-modal__header">
              Add
              {' '}
              <KosuSymbol />
              {' '}
              to the treasury
            </div>
          </Col>
          <Col xs={2} className="text-right">
            <CloseIcon action={toggle} />
          </Col>
        </Row>
        <Row className="pb-5 justify-content-center">
          <Col xs={8}>
            <div className="add-treasury-modal__label">
              Tokens to add
            </div>
            <input
              placeholder={0}
              type="number"
              value={tokensToAdd}
              onChange={e => setTokensToAdd(e.target.value)}
              className="add-treasury-modal__input"
              min={0}
            />
          </Col>
        </Row>
        <Row className="px-3 pb-1">
          <Col className="text-left" xs={12} sm={6}>
            <Button
              color="cancel"
              text="Cancel"
              action={toggle}
            />
          </Col>
          <Col className="text-right" xs={12} sm={6}>
            <Button
              color="green"
              text="Add"
              disabled={tokensToAdd === '0' || tokensToAdd === '' || tokensToAdd > parseFloat(walletBalance)}
              action={() => add(tokensToAdd.toString())}
              onceConfirmed={toggle}
              isAsync
              block
            />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

AddTreasuryModal.propTypes = {
  isOpen: PropTypes.bool,
  add: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  walletBalance: PropTypes.string,
};

AddTreasuryModal.defaultProps = {
  isOpen: false,
  walletBalance: 0,
};

export default AddTreasuryModal;
