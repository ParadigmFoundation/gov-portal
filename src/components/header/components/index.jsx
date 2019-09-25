/**
 * Displays the header
 */

import React, {
  useState,
  useEffect,
} from 'react';
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
    address,
    balance,
    metaMaskConnected,
    pathname,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, toggleDropdown] = useState(false);

  useEffect(() => {
    if (pathname.includes('account')) {
      document.title = 'Account | Paradigm';
    } else {
      document.title = 'Governance | Paradigm';
    }
  }, [pathname]);

  function returnBalance() {
    let zeroFirst = true;

    return balance.split('').map((c, id) => {
      if (c !== '0' && zeroFirst) {
        zeroFirst = false;
      }

      let className = 'header__number';

      if (c === '0' && zeroFirst) {
        className += ' header__number--grey';
      }

      return <span key={id} className={className}>{c}</span>;
    });
  }

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
                  {document.location.pathname.includes('account') ? 'Account' : 'Governance'}
                </span>
                <img src={Caret} className="header__dropdown-caret" alt="caret" />
              </DropdownToggle>
              <DropdownMenu className="header__dropdown">
                <a
                  href="https://create.paradigm.market"
                  className="header__dropdown-link"
                >
                  Create
                </a>
                <a
                  href="https://explore.paradigm.market"
                  className="header__dropdown-link"
                >
                  Explore
                </a>
                <a
                  href="https://search.paradigm.market"
                  className="header__dropdown-link"
                >
                  Search
                </a>
                <NavLink
                  to="/governance"
                  className="header__dropdown-link"
                >
                  Governance
                </NavLink>
                <NavLink
                  to="/account"
                  className="header__dropdown-link"
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
                  <span className="header__address">
                    {address}
                  </span>
                </NavItem>
                <NavItem>
                  <KosuSymbol />
                </NavItem>
                <NavItem>
                  <span className="header__balance">
                    {returnBalance()}
                  </span>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <div className="header__icon header__icon--pending" />
                  {' '}
                </NavItem>
                <NavItem>
                  <ConnectMetaMask />
                </NavItem>
              </>
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
  pathname: PropTypes.string.isRequired,
};

HeaderView.defaultProps = {
  address: '0x0',
  balance: '0',
  metaMaskConnected: false,
};

export default HeaderView;
