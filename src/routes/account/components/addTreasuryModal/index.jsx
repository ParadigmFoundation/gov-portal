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

import './index.scss';

function AddTreasuryModal(props) {
  const {
    isOpen,
    toggle,
    add,
  } = props;

  const [tokensToAdd, setTokensToAdd] = useState(0);

  return (
    <Modal className="add-tresury-modal" isOpen={isOpen} toggle={toggle}>
      <ModalBody className="add-tresury-modal__body">
        <Row className="pb-5 align-items-center">
          <Col>
            <div className="add-tresury-modal__header">
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
              text="Add"
              disabled={parseInt(tokensToAdd, 10) === 0}
              action={() => add(tokensToAdd.toString())}
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
};

AddTreasuryModal.defaultProps = {
  isOpen: false,
};

export default AddTreasuryModal;
