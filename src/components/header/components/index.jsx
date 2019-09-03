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
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import KosuSymbol from '../../symbols/kosuSymbol';
import ConnectMetaMask from '../../connectMetaMask';

import ParadigmLogo from '../../../assets/img/logo.png';
import Caret from '../../../assets/img/caret.png';

import './index.scss';

function HeaderView(props) {
  const {
    currentRoute,
    address,
    balance,
    metaMaskConnected,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, toggleDropdown] = useState(false);

  return (
    <div className="container-fluid">
      <Navbar light expand="md" className="header">
        <NavLink to="/">
          <img
            src={ParadigmLogo}
            className="header__logo"
            alt="Paradigm"
          />
        </NavLink>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <Dropdown
              isOpen={isDropdownOpen}
              toggle={() => toggleDropdown(!isDropdownOpen)}
              onMouseEnter={() => toggleDropdown(!isDropdownOpen)}
              onMouseLeave={() => toggleDropdown(!isDropdownOpen)}
              nav
              inNavbar
            >
              <DropdownToggle nav>
                <span className="header__dropdown-caption">
                  {currentRoute}
                </span>
                <img src={Caret} className="header__dropdown-caret" alt="caret" />
              </DropdownToggle>
              <DropdownMenu className="header__dropdown">
                <NavLink
                  to="/governance"
                  className="header__dropdown-link"
                  onClick={() => toggleDropdown(!isDropdownOpen)}
                >
                  Governance
                </NavLink>
                <NavLink
                  to="/account"
                  className="header__dropdown-link"
                  onClick={() => toggleDropdown(!isDropdownOpen)}
                >
                  Account
                </NavLink>
              </DropdownMenu>
            </Dropdown>
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
