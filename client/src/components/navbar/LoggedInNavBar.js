import React from "react";
import { withRouter } from "react-router-dom";
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
  DropdownItem,
  Button
  //ButtonDropdown
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

  logOut = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/login");
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
                <Button
                  color="link"
                  onClick={() => this.props.history.push("/dashboard")}
                >
                  Dashboard
                </Button>
              </NavItem>
              <NavItem>
                <Button color="link">Expenses</Button>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Profile
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>View Profile</DropdownItem>
                  <DropdownItem>Edit Profile</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Button color="danger" onClick={this.logOut}>
                      Logout
                    </Button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(LoggedInNavBar);
