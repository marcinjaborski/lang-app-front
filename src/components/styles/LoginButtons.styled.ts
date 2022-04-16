import styled from "styled-components";

export const LoginButtonsStyled = styled.div`
  & {
    display: flex;
    justify-content: center;
  }
  
  button {
    width: 80%;
    font-size: 1.5em;
    font-family: "Montserrat", sans-serif;
    background-color: var(--secondary);
    outline: none;
    border: none;
    border-radius: 25px;
    padding: 10px;
    color: var(--primary);
    cursor: pointer;
  }
`;