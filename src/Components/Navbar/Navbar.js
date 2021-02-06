import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

import {Link} from 'react-router-dom';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="transparent" dark expand="md" fixed="top">
        <NavbarBrand tag={Link}  to="/" style={{color:'white'}}>MovieAPI</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" style={{color:'white'}}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/genre" style={{color:'white'}}>Genre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/country" style={{color:'white'}}>Country</NavLink>
            </NavItem>
          </Nav>
          <NavbarText><Link to="/api" style={{color:'white'}}>Api Used</Link></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;