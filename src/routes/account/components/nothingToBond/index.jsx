import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  Row,
  Col,
} from 'reactstrap';

import Button from '../../../../components/button';
import CloseIcon from '../../../../components/closeIcon';
import KosuSymbol from '../../../../components/symbols/kosuSymbol';

import './index.scss';

function NothingToBond(props) {
  const {
    isOpen,
    toggle,
  } = props;

  return (
    <Modal className="nothing-bond-modal" isOpen={isOpen} toggle={toggle}>
      <ModalBody className="nothing-bond-modal__body">
        <Row className="pb-5">
          <Col>
            <div className="nothing-bond-modal__header">
              Nothing to bond
            </div>
          </Col>
          <Col xs={2} className="text-right">
            <CloseIcon action={toggle} />
          </Col>
        </Row>
        <Row className="pb-5 justify-content-center">
          <Col xs={8}>
            <div className="nothing-bond-modal__content">
              You need
              {' '}
              <KosuSymbol />
              {' '}
              in your treasury to bond.
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

NothingToBond.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

NothingToBond.defaultProps = {
  isOpen: false,
};

export default NothingToBond;
