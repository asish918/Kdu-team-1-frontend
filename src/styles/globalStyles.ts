import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: normal;
    font-family: "Lato", sans-serif;
  }

  html, body {
    height: 100%;
  }

  #root {
    height: 100%;
    position: relative;
  }

  input {
    border: none;
    outline: none;
    background-color: transparent;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
