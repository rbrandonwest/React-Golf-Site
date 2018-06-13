import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const navStyle = {
    marginBottom: '0px'
}

const mainStyle = {
    paddingTop: '42px'
}

const secondStyle = {
    marginBottom: '15px'
}



class MyNav extends Component {
    render() {
        return ( 
    <Navbar style={navStyle}>
      <Navbar.Header>
        <Navbar.Brand>
        <Link to="/" style={mainStyle}>ReactGolfer</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem>
          <Link to="/calculator" style={secondStyle}>Handicap Calculator</Link>
        </NavItem>
      </Nav>
    </Navbar>
    )
}
}



export default MyNav;
    