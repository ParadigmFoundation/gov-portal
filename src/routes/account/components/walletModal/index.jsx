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

function WalletModal(props) {
  const {
    toggle,
    isOpen,
    pay,
    limit,
    estimate,
  } = props;

  const [etherToBound, setEtherToBound] = useState(0);
  const [estimatedKosu, setEstimatedKosu] = useState('0');

  async function getEstimatedKosu(value) {
    setEtherToBound(value);
    const res = await estimate(value);
    console.log(res);
    setEstimatedKosu(res);
  }

  return (
    <Modal className="wallet-modal" isOpen={isOpen} toggle={toggle}>
      <ModalBody className="wallet-modal__body">
        <Row className="pb-5">
          <Col>
            <div className="wallet-modal__header">
              Bond Ether to get
              {' '}
              <KosuSymbol />
            </div>
          </Col>
          <Col className="text-right">
            <CloseIcon action={toggle} />
          </Col>
        </Row>
        <Row className="px-5 pb-3">
          <Col>
            <div className="wallet-modal__label">
              Ether to bond
            </div>
          </Col>
          <Col xs={2} />
          <Col>
            <div className="wallet-modal__label">
              Estimated Kosu
            </div>
          </Col>
        </Row>
        <Row className="align-items-center px-5">
          <Col>
            <input
              placeholder={0}
              type="number"
              value={etherToBound}
              onChange={e => getEstimatedKosu(e.target.value)}
              className="wallet-modal__input"
              min={0}
            />
          </Col>
          <Col xs={2}>
            <img src={ArrowRightSrc} alt="arrow-right" width="100%" />
          </Col>
          <Col>
            <div className="wallet-modal__estimated-kosu">
              {estimatedKosu}
            </div>
          </Col>
        </Row>
        <Row className="p-5">
          <Col xs={12} sm={6}>
            <ProgressBar
              max={parseInt(limit, 10)}
              value={etherToBound}
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
              text="Confirm"
              disabled={etherToBound === 0}
              action={() => pay(etherToBound)}
            />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

WalletModal.propTypes = {
  isOpen: PropTypes.bool,
  limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  toggle: PropTypes.func.isRequired,
  pay: PropTypes.func,
  estimate: PropTypes.func,
};

WalletModal.defaultProps = {
  isOpen: false,
  limit: '0',
  pay: () => {},
  estimate: () => {},
};

export default WalletModal;
