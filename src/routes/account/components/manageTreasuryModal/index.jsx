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

import Button from '../../../../components/button';
import CloseIcon from '../../../../components/closeIcon';

import './index.scss';

function ManageTreasuryModal(props) {
  const {
    isOpen,
    close,
    edit,
    remove,
  } = props;

  const [removeClicked, setRemoveClicked] = useState(false);

  return (
    <Modal className="manage-treasury-modal" isOpen={isOpen}>
      <ModalBody className="manage-treasury-modal__body">
        <Row className="pb-5 align-items-center">
          <Col>
            <div className="manage-treasury-modal__header">
              Treasury
            </div>
          </Col>
          <Col xs={2} className="text-right">
            <CloseIcon action={close} />
          </Col>
        </Row>
        <Row className="pb-5 justify-content-center">
          <Col xs={8}>
            <div className="pb-2">
              <Button
                text="Edit current balance"
                color="green"
                action={() => edit()}
                block
              />
            </div>
            <div>
              {removeClicked ? (
                <Button
                  text="Confirm"
                  color="red"
                  action={() => remove()}
                  block
                />
              ) : (
                <Button
                  text="Remove entire balance"
                  color="outlined"
                  action={() => setRemoveClicked(true)}
                  block
                />
              )}
            </div>
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
        </Row>
      </ModalBody>
    </Modal>
  );
}

ManageTreasuryModal.propTypes = {
  isOpen: PropTypes.bool,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

ManageTreasuryModal.defaultProps = {
  isOpen: false,
};

export default ManageTreasuryModal;
