import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler } from 'shards-react';

const NavigationBar = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  return (
    <div>
      <Navbar type="dark" theme="danger" sticky="true">
        {' '}
        <NavbarBrand href="#">Maple Health Montréal</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setCollapseOpen(!collapseOpen);
          }}
        />
      </Navbar>
    </div>
  );
};

export default NavigationBar;
