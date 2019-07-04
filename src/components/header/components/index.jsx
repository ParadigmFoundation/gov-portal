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

import KosuSymbol from '../../symbols/kosuSymbol';
import ConnectMetaMask from '../../connectMetaMask';

import ParadigmLogo from '../../../assets/img/paradigm-Logo2@2x.png';

import './index.scss';

function HeaderView(props) {
  const {
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
          <div className="header__subtitle">
            Governance
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
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
