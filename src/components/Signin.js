import React, { Component } from "react";
import { firebaseApp } from "../firebase";
import history from "../history";
import { FormGroup, FormControl, InputGroup, Button } from "react-bootstrap";

class Signin extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.handleChangePass = this.handleChangePass.bind(this);

    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  }

  signIn() {
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error });
      });
  }

  historyUpdate() {
    history.replace("/signup");
  }

  getValidationState() {
    const str = this.state.email;
    const length = this.state.email.length;
    if (str.match(/@/) && str.indexOf(".com") > -1) return "success";
    else if (str.match(/@/) || str.indexOf(".com") > -1) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  getValidationStatePass() {
    const passStr = this.state.password;
    const length = this.state.password.length;
    if (
      length > 10 &&
      passStr.match(/[~`!#$%^&*+=\-[\]\\;,/{}|\\":<>?]/) &&
      passStr.match(/[0-9]/)
    )
      return "success";
    else if (
      length > 10 ||
      passStr.match(/[~`!#$%^&*+=\-[\]\\;,/{}|\\":<>?]/) ||
      passStr.match(/[0-9]/)
    )
      return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePass(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div style={{ margin: "5%" }}>
        <h1 className="title">Welcome to iTin3r@ry</h1>
        <form className="form-inline">
          <FormGroup
            controlId="emailInput"
            validationState={this.getValidationState()}
            style={{ marginRight: "5px" }}
          >
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl
                type="text"
                email={this.state.email}
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </InputGroup>
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup
            controlId="passwordInput"
            validationState={this.getValidationStatePass()}
            style={{ marginRight: "5px" }}
          >
            <FormControl
              type="password"
              password={this.state.password}
              placeholder="Enter password (10 char, 1 sym and 1 num)"
              onChange={this.handleChangePass}
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button bsStyle="success" onClick={() => this.signIn()}>
            Sign in to your Itinerary Account
          </Button>
        </form>
        <div
          className="error-msg"
          style={{ margin: "1%", paddingBottom: "6px" }}
        >
          {this.state.error.message}
        </div>
        <a
          className="signup-link"
          style={{ cursor: "pointer" }}
          onClick={() => this.historyUpdate()}
        >
          Not a member yet? Sign Up Here!
        </a>
      </div>
    );
  }
}

export default Signin;
