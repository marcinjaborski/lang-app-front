import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MenuButton = (props) => {
  return (
    <Link to={props.link} className="menuButton" onClick={props.onClick || function(){}}>
      <FontAwesomeIcon icon={props.icon} className="menuButtonIcon" />
    </Link>
  );
};

export default MenuButton;
