import React from 'react';
import {Link} from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler,} from 'reactstrap';
import {NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

export default class MyNavbar extends React.Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      
    });
  }

  render() {
    return (
      <Navbar fixed="top" color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/articles">Articles</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}