import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          Paradigm Governance
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Test</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Test 2</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
