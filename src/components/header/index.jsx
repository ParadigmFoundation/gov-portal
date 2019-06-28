/**
 * Displays the header
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

function Header(props) {
  const {
    address,
    balance,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          Paradigm Governance
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto align-items-center" navbar>
            <NavItem>
              <span className="header__address">
                {address}
              </span>
            </NavItem>
            <NavItem>
              <span className="header__balance">
                {balance}
              </span>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  address: PropTypes.string,
  balance: PropTypes.string,
};

Header.defaultProps = {
  address: '0x0',
  balance: '0',
};

export default Header;
