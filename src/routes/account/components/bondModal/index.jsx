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
import ProgressBar from '../../../../components/progressBar';
import Button from '../../../../components/button';
import CloseIcon from '../../../../components/closeIcon';
import ArrowRightSrc from '../../../../assets/img/arrow-right.png';

import './index.scss';

function BondModal(props) {
  const {
    isOpen,
    close,
    limit,
  } = props;

  const [tokensToBound, setTokensToBound] = useState(0);

  return (
    <Modal className="bond-modal" isOpen={isOpen}>
      <ModalBody className="bond-modal__body">
        <Row className="pb-5">
          <Col>
            <div className="bond-modal__header">
              Bond your
              {' '}
              <KosuSymbol />
            </div>
          </Col>
          <Col className="text-right">
            <CloseIcon action={close} />
          </Col>
        </Row>
        <Row className="px-5 pb-3">
          <Col>
            <div className="bond-modal__label">
              Tokens to bond
            </div>
          </Col>
          <Col xs={2} />
          <Col>
            <div className="bond-modal__label">
              Your order post limit
            </div>
          </Col>
        </Row>
        <Row className="align-items-center px-5">
          <Col>
            <input
              placeholder={0}
              type="number"
              value={tokensToBound}
              onChange={e => setTokensToBound(e.target.value)}
              className="bond-modal__input"
              min={0}
              max={limit}
            />
          </Col>
          <Col xs={2}>
            <img src={ArrowRightSrc} alt="arrow-right" width="100%" />
          </Col>
          <Col>
            <div className="bond-modal__limit">
              {limit}
            </div>
          </Col>
        </Row>
        <Row className="p-5">
          <Col xs={12} sm={6}>
            <ProgressBar
              max={limit}
              value={tokensToBound}
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
              text="Confirm"
              disabled={parseInt(tokensToBound, 10) === 0}
            />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

BondModal.propTypes = {
  isOpen: PropTypes.bool,
  limit: PropTypes.number,
  close: PropTypes.func.isRequired,
};

BondModal.defaultProps = {
  isOpen: false,
  limit: 0,
};

export default BondModal;
