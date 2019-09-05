import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      ...this.state.isOpen,
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "#ffffff" }}
          fixed="top"
          light
          expand="md"
        >
          <NavbarBrand href="/">Track Your Coins</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">SignUp</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Learn More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>About Us</DropdownItem>
                  <DropdownItem>Features</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Team</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
