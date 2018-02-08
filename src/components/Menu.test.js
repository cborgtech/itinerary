import React from "react";
import "../setupTest.js";
import { shallow } from "enzyme";
import { Menu } from "./Menu";

describe("Menu Component", () => {
  const wrapper = shallow(<Menu />);
  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //it returns a Navbar
});
