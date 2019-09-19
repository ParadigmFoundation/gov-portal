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

import Button from '../../../../components/button';
import CloseIcon from '../../../../components/closeIcon';

import './index.scss';

function ManageTreasuryModal(props) {
  const {
    isOpen,
    toggle,
    edit,
    remove,
  } = props;

  const [removeClicked, setRemoveClicked] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setRemoveClicked(false);
    }
  }, [isOpen]);

  return (
    <Modal className="manage-treasury-modal" isOpen={isOpen} toggle={toggle}>
      <ModalBody className="manage-treasury-modal__body">
        <Row className="pb-5">
          <Col>
            <div className="manage-treasury-modal__header">
              Treasury
            </div>
          </Col>
          <Col xs={2} className="text-right">
            <CloseIcon action={toggle} />
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
                  onceConfirmed={toggle}
                  block
                  isAsync
                />
              ) : (
                <Button
                  text="Remove entire balance"
                  color="remove"
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
              color="cancel"
              text="Cancel"
              action={toggle}
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
  toggle: PropTypes.func.isRequired,
};

ManageTreasuryModal.defaultProps = {
  isOpen: false,
};

export default ManageTreasuryModal;
