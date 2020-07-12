import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
} from 'shards-react';

const NavigationBar = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Navbar type="dark" theme="danger" expand="md" sticky="true">
        {' '}
        <NavbarBrand href="/">Maple Health Montréal</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setCollapseOpen(!collapseOpen);
          }}
        />
        <Collapse open={collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink active href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact-us">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href=""
                onClick={() => {
                  setModalOpen(!modalOpen);
                }}
              >
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
