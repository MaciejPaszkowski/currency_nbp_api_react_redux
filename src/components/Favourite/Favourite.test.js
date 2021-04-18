import React from "react";
import { shallow } from "enzyme";
import { Favourite } from "./Favourite";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import data from "./Favourite";

describe("MyButton component in Favourite component", () => {
  it("should MyButton icon to be faWindowClose in Favourite component", () => {
    const wrapper = shallow(<Favourite data={data} />);
    const button = wrapper.find(".button");
    expect(button.props().icon).toBe(faWindowClose);
  });
});
