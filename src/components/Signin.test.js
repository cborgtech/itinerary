import React from "react";
import { shallow } from "enzyme";
import "../setupTest.js";
import Signin from "./Signin";

describe("The Sign-In Component", () => {
  const signin = shallow(<Signin />);
  const title = "Welcome to Itinerary";
  it("renders correctly", () => {
    expect(signin).toMatchSnapshot();
  });
  // it("displays a title", () => {
  //   expect(signin.find(".title").text()).toEqual(title);
  // });
});
