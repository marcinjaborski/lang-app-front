import React from "react";
import { LoginStyled } from "./styles/LoginInput.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginInput = (props) => {
  return (
    <LoginStyled>
      <label>
        {props.label}
        <FontAwesomeIcon icon={props.icon}/>
        <input
          required
          type={props.type}
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
      </label>
    </LoginStyled>
  );
};

export default LoginInput;