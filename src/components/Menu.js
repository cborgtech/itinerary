import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { firebaseApp } from "../firebase";
import { connect } from "react-redux";
// import history from "../history";
// import { signInUser } from "../actions/index-actions";

export class Menu extends Component {
  signOut() {
    firebaseApp.auth().signOut();
    // this.props.store.dispatch(signInUser(""));
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a style={{ cursor: "pointer" }}>
              {" "}
              <strong>iTin3r@ry</strong>{" "}
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>Signed in as: {this.props.state}</NavItem>
          </Nav>
          <Nav pullRight bsStyle="pills">
            <NavItem className="navitem" key="2" onClick={() => this.signOut()}>
              <strong>Sign Out</strong>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  // console.log("state", state);
  return { state };
}

export default connect(mapStateToProps, null)(Menu);
