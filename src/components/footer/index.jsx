import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';

import './index.scss';

function Footer() {
  return (
    <div className="PostFooterWrapper container">
      <Row>
        <Col>
          <p>© Paradigm Labs 2019</p>
          <a href="mailto:info@paradigm.market">
            Contact Us
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
