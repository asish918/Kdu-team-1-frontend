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

  fieldset {
    border: none;
    outline: none;
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
