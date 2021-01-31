import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap'; 

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar id="NavBar"  expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="NavItem">
                <NavLink id="HomeLink" to="/" tag={Link}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="UsersLink" to="/users" tag={Link}>Users</NavLink>
              </NavItem>
            </Nav>  
          </Collapse>
        </Navbar>
      </div>
    );
}

export default NavBar;
