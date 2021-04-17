import React from "react";
import "./MyButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyButton = ({ onClick, icon }) => {
  return (
    <button className="button" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default MyButton;
