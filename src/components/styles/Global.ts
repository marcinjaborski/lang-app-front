import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #e6e9f0;
    --secondary: #629df5;
    --accent: #d9a142;
    --secondary-lighter: #e2f1ff;
    --light-gray: #a2a2a2;
    --dark-gray: #696969;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .App {
    width: 100%;
    height: 100vh;
    display: flex;
  }
  
  .App > .content {
    width: 100%;
    overflow-y: auto;
  }
`;

export default GlobalStyles;
