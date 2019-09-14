import React from "react";
import { withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import "./navbar.css";

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
    localStorage.removeItem("user_id");
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
          <NavbarBrand
            onClick={() => this.props.history.push("/dashboard")}
            id="navbarBrand"
          >
            Track Your Coins
          </NavbarBrand>
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
                <Button color="danger" onClick={this.logOut}>
                  Logout
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(LoggedInNavBar);
