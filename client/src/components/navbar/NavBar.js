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
          style={{ backgroundColor: "#ffffff", padding: "10px" }}
          fixed="top"
          light
          expand="md"
        >
          <NavbarBrand onClick={() => this.props.history.push("/")}  id="navbarBrand">
            Track Your Coins
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button
                  color="link"
                  onClick={() => this.props.history.push("/login")}
                >
                  Login
                </Button>
              </NavItem>
              <NavItem>
                <Button
                  color="link"
                  onClick={() => this.props.history.push("/signup")}
                >
                  SignUp
                </Button>
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

export default withRouter(NavBar);
