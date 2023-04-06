import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

const GlobalStyles = createGlobalStyle<ThemeType>`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: Poppins, sans-serif;
  }

  body {
    background-color:${({ theme }) => theme.colors.white};
  }
`;

export default GlobalStyles;
