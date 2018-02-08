import React, { Component } from "react";
import "./App.css";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Menu from "./Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <ListGroup>
          <ListGroupItem header="Monday" href="#">
            February 1, 2018
          </ListGroupItem>
          <ListGroupItem header="Tuesday" href="#">
            February 1, 2018
          </ListGroupItem>
          <ListGroupItem header="Wednesday" href="#">
            February 1, 2018
          </ListGroupItem>
        </ListGroup>
        <p className="footer">Courtesy of CBORGTECH</p>
      </div>
    );
  }
}

export default App;
