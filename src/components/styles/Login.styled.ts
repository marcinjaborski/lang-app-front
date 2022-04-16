import styled from "styled-components";

export const LoginStyled = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(217,161,66);
    background: linear-gradient(153deg, rgba(217,161,66,1) 0%, rgba(0,212,255,1) 65%);
    height: 100vh;
  }
  
  form {
    width: 500px;
    height: 95%;
    border-radius: 20px;
    background-color: var(--primary);
  }
  
  h1 {
    text-align: center;
    font-size: 3em;
  }
`;
