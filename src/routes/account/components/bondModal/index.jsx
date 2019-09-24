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
import numeral from 'numeral';

import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import ProgressBar from '../../../../components/progressBar';
import Button from '../../../../components/button';
import CloseIcon from '../../../../components/closeIcon';
import ArrowRightSrc from '../../../../assets/img/arrow-right.png';

import './index.scss';

function BondModal(props) {
  const {
    toggle,
    currentBond,
    isOpen,
    max,
    confirm,
    estimateNewPostLimit,
  } = props;

  const [tokensToBound, setTokensToBound] = useState('');
  const [limit, setLimit] = useState('');

  async function updateValues(val) {
    setTokensToBound(val);

    if (val !== '') {
      const limitReq = await estimateNewPostLimit(val);
      setLimit(limitReq);
    } else {
      setLimit('0');
    }
  }

  useEffect(() => {
    if (!isOpen) {
      updateValues('');
    }
  }, [isOpen]);

  return (
    <Modal className="bond-modal" isOpen={isOpen} toggle={toggle}>
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
            <CloseIcon action={toggle} />
          </Col>
        </Row>
        {currentBond !== '0' && (
          <Row className="px-5 pb-2">
            <Col>
              <div className="bond-modal__label">
                Current bond
              </div>
              <div className="bond-modal__limit">
                {numeral(currentBond).format('0,0.[00]')}
              </div>
            </Col>
          </Row>
        )}
        <Row className="px-5 pb-3">
          <Col>
            <div className="bond-modal__label">
              New bond amount
            </div>
          </Col>
          <Col xs={2} />
          <Col>
            <div className="bond-modal__label">
              New order post limit
            </div>
          </Col>
        </Row>
        <Row className="align-items-center px-5">
          <Col>
            <input
              placeholder={0}
              type="number"
              value={tokensToBound}
              onChange={e => updateValues(e.target.value)}
              className="bond-modal__input"
              min={0}
              max={parseFloat(max)}
            />
          </Col>
          <Col xs={2}>
            <img src={ArrowRightSrc} alt="arrow-right" width="65%" />
          </Col>
          <Col>
            <div className="bond-modal__limit">
              {numeral(limit).format('0,0.[00]')}
            </div>
          </Col>
        </Row>
        <Row className="p-5">
          <Col xs={12} sm={6}>
            <ProgressBar
              max={parseFloat(max)}
              value={parseFloat(tokensToBound)}
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
              disabled={tokensToBound === '0' || tokensToBound === '' || tokensToBound > parseFloat(max)}
              action={() => confirm(currentBond, tokensToBound)}
              isAsync
              onceConfirmed={toggle}
            />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

BondModal.propTypes = {
  currentBond: PropTypes.string,
  isOpen: PropTypes.bool,
  max: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  confirm: PropTypes.func,
  estimateNewPostLimit: PropTypes.func,
};

BondModal.defaultProps = {
  currentBond: '0',
  isOpen: false,
  max: '0',
  confirm: () => {},
  estimateNewPostLimit: () => {},
};

export default BondModal;
