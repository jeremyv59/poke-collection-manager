import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

const GlobalStyles = createGlobalStyle<ThemeType>`
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
    background-color:${({ theme }) => theme.colors.white};
    font-family: Poppins, sans-serif;
  }
`;

export default GlobalStyles;
