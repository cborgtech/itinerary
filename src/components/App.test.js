import React from "react";
// import ReactDOM from "react-dom";
import "../setupTest.js";
import { shallow } from "enzyme";
import App from "./App";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe("App component", () => {
  const wrapper = shallow(<App />);
  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //it has a div and the div has 2 children

  // it("contains a Menu component", () => {
  //   expect(wrapper.find("Menu").exists()).toBe(true);
  // });
});
