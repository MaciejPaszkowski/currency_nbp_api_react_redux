import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import MyButton from "./MyButton";

it("renders ok", () => {
  const tree = renderer.create(<MyButton className="button" />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("MyButton component", () => {
  it("should renders ok", () => {
    const wrapper = shallow(<MyButton />);
    const button = wrapper.find("button");
    expect(button.text()).toBe("<FontAwesomeIcon />");
  });
});
