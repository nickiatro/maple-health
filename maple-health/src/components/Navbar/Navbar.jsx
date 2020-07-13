import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  Modal,
} from 'shards-react';
import { LoginForm } from '../LoginForm';

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
              <NavLink
                active={window.location.href.includes('/about')}
                href="/about"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={window.location.href.includes('/contact-us')}
                href="/contact-us"
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                onClick={() => {
                  setModalOpen(!modalOpen);
                }}
              >
                Login
              </NavLink>
              <Modal open={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
                <LoginForm />
              </Modal>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
