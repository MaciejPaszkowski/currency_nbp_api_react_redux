import React from "react";
import { shallow } from "enzyme";
import Currency from "./Currency";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import data from "./Currency";

describe("MyButton component in Currency component", () => {
  it("should MyButton icon to be faCheck in Currency component", () => {
    const wrapper = shallow(<Currency data={data} />);
    const button = wrapper.find(".button");
    expect(button.props().icon).toBe(faCheck);
  });
});
