import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Modal,
  ModalBody,
} from 'reactstrap';
import numeral from 'numeral';

import KosuSymbol from '../../../../components/symbols/kosuSymbol';
import Button from '../../../../components/button';
import CloseIcon from '../../../../components/closeIcon';

import warningSign from '../../../../assets/img/warning.png';

import './index.scss';

function ProposalChallengeModal(props) {
  const {
    id,
    isOpen,
    price,
    close,
    challengeProposal,
  } = props;

  const [details, setDetails] = useState('');

  return (
    <Modal className="proposal-challenge-modal" isOpen={isOpen}>
      <Row>
        <Col className="proposal-challenge-modal__close">
          <CloseIcon action={close} />
        </Col>
      </Row>
      <ModalBody className="proposal-challenge-modal__body">
        <Row className="pb-5">
          <Col>
            <div className="proposal-challenge-modal__header">
              Challenge proposal
            </div>
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <div className="proposal-challenge-modal__cost-label">
              This challenge will cost:
            </div>
            <div className="proposal-challenge-modal__price">
              {numeral(price).format('0,0.[00]')}
            </div>
            {' '}
            <KosuSymbol />
          </Col>
        </Row>
        <Row className="pb-4">
          <Col>
            <textarea
              className="proposal-challenge-modal__reason-input"
              placeholder="Enter your reasons for challenging this proposal here."
              rows="4"
              value={details}
              onChange={e => setDetails(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <div className="proposal-challenge-modal__warning">
              <div className="proposal-challenge-modal__warning-title">
                <img src={warningSign} width={18} alt="Warning" />
                {' '}
                Warning
              </div>
              <div className="proposal-challenge-modal__warning-content">
                You are not guaranteed to win this challenge. If you are unsuccessful, you risk losing your tokens used to challenge this proposal.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              color="cancel"
              text="Cancel"
              action={close}
            />
          </Col>
          <Col>
            <Button
              color="green"
              text="Challenge"
              action={() => challengeProposal(id, details)}
              onceConfirmed={close}
              isAsync
              block
            />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

ProposalChallengeModal.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  price: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  challengeProposal: PropTypes.func.isRequired,
};

ProposalChallengeModal.defaultProps = {
  isOpen: false,
};

export default ProposalChallengeModal;
