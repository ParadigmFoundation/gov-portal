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

function AddTreasuryMondal(props) {
  const {
    isOpen,
    close,
    add,
  } = props;

  const [tokensToAdd, setTokensToAdd] = useState(0);

  return (
    <Modal className="add-tresury-modal" isOpen={isOpen}>
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
            <CloseIcon action={close} />
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
              action={close}
            />
          </Col>
          <Col className="text-right">
            <Button
              color="green"
              text="Add"
              disabled={parseInt(tokensToAdd, 10) === 0}
              action={() => add(tokensToAdd)}
            />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

AddTreasuryMondal.propTypes = {
  isOpen: PropTypes.bool,
  add: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

AddTreasuryMondal.defaultProps = {
  isOpen: false,
};

export default AddTreasuryMondal;