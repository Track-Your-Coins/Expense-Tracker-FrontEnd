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

class LoggedInNavBar extends React.Component {
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
        <Navbar color="success" light expand="md">
          <NavbarBrand href="/">Track Your Coins</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Logout</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profile
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>View Profile</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Add New Expense</DropdownItem>
                  <DropdownItem>Add New Income</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default LoggedInNavBar;
