import { createGlobalStyle } from "styled-components";

export const colors = {
  indigo: "#3949ab",
  orange: "#ffb300",
};

export const transitionEffect = "all 250ms ease-in";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,700');

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    background-color: #ffffff;
    font-family: Poppins, sans-serif;
  }
`;

export default GlobalStyles;
