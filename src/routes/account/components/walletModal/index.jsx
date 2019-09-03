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
import numeral from 'numeral';

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
    ethBalance,
    estimate,
  } = props;

  const [etherToBound, setEtherToBound] = useState('');
  const [estimatedKosu, setEstimatedKosu] = useState('0');

  async function getEstimatedKosu(value) {
    setEtherToBound(value);

    if (value !== '') {
      const res = await estimate(value);
      setEstimatedKosu(res);
    } else {
      setEstimatedKosu('0');
    }
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
            <img src={ArrowRightSrc} alt="arrow-right" width="75%" />
          </Col>
          <Col>
            <div className="wallet-modal__estimated-kosu">
              {numeral(estimatedKosu).format('0,0.0')}
            </div>
          </Col>
        </Row>
        <Row className="p-5">
          <Col xs={12} sm={6}>
            <ProgressBar
              max={parseInt(ethBalance, 10)}
              value={parseInt(etherToBound, 10)}
            />
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
          <Col className="text-right">
            <Button
              color="green"
              text="Confirm"
              disabled={etherToBound === 0}
              action={() => pay(etherToBound)}
              onceConfirmed={toggle}
              isAsync
            />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

WalletModal.propTypes = {
  isOpen: PropTypes.bool,
  ethBalance: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  pay: PropTypes.func,
  estimate: PropTypes.func,
};

WalletModal.defaultProps = {
  isOpen: false,
  ethBalance: '0',
  pay: () => {},
  estimate: () => {},
};

export default WalletModal;
