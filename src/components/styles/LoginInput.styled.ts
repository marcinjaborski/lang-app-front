import styled from "styled-components";

export const LoginStyled = styled.div`
  & {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  
  label {
    display: flex;
    flex-direction: column;
    width: 80%;
    color: var(--light-gray);
    position: relative;
  }
  
  input {
    width: 100%;
    border: none;
    background-color: unset;
    outline: none;
    border-bottom: 1px solid var(--light-gray);
    line-height: 1.5;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    padding: 10px 10px 10px 30px;
  }
  
  svg {
    position: absolute;
    left: 5px;
    bottom: 15px;
    font-size: 20px;
  }
`;
