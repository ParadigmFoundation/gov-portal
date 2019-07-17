/**
 * Displays the header
 */

import React, { useState } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import KosuSymbol from '../../symbols/kosuSymbol';
import ConnectMetaMask from '../../connectMetaMask';

import ParadigmLogo from '../../../assets/img/paradigm-Logo2@2x.png';

import './index.scss';

function HeaderView(props) {
  const {
    currentRoute,
    address,
    balance,
    metaMaskConnected,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar light expand="md" className="header">
        <NavbarBrand href="/">
          <img src={ParadigmLogo} alt="Paradigm" />
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {currentRoute}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={NavLink} to="/governance">
                  Governance
                </DropdownItem>
                <DropdownItem tag={NavLink} to="/account">
                  Account
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="ml-auto align-items-center" navbar>
            {metaMaskConnected ? (
              <>
                <NavItem>
                  <div className="header__icon" />
                  {' '}
                </NavItem>
                <NavItem>
                  <span className="header__address">
                    {address}
                  </span>
                </NavItem>
                <NavItem>
                  <KosuSymbol />
                </NavItem>
                <NavItem>
                  <span className="header__balance">
                    {balance}
                  </span>
                </NavItem>
              </>
            ) : (
              <NavItem>
                <ConnectMetaMask />
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

HeaderView.propTypes = {
  currentRoute: PropTypes.string.isRequired,
  address: PropTypes.string,
  balance: PropTypes.string,
  metaMaskConnected: PropTypes.bool,
};

HeaderView.defaultProps = {
  address: '0x0',
  balance: '0',
  metaMaskConnected: false,
};

export default HeaderView;
