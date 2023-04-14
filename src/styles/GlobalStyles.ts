import styled, { CSSProperties, createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";
import { device } from "./Breakpoints";

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
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

// GLOBAL COMPONENTS
export const PageLayout = styled.div`
  width: 100%;
  position : relative;
  background: ${({ theme }) => theme.colors.darkSecondary};

  @media ${device.tablet} {
    padding-top: 100px;
  }
`;

export const HeadingText = styled.h4<CSSProperties>`
  color: ${p => (p.color ? p.color : "white")};
  font-size: ${p => (p.fontSize ? p.fontSize : "1.5rem")};
  font-weight: ${p => (p.fontWeight ? p.fontWeight : "600")};
  margin-bottom :  ${p => (p.marginBottom ? p.marginBottom : "0")};
`;

export const SmallText = styled.small<CSSProperties>`
  color: ${p => (p.color ? p.color : "#7A86A1")};
  font-size: ${p => (p.fontSize ? p.fontSize : "0.75rem")};
  font-weight: ${p => (p.fontWeight ? p.fontWeight : "600")};
  margin-bottom :  ${p => (p.marginBottom ? p.marginBottom : "0")};
`;

export default GlobalStyles;
