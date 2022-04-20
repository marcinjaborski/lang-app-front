import React from "react";
import { LoginButtonsStyled } from "./styles/LoginButtons.styled";

const LoginButton = (props) => {
  return (
    <LoginButtonsStyled>
      <button>{props.text}</button>
    </LoginButtonsStyled>
  );
};

export default LoginButton;