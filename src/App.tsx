import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Sidebar />
    </ThemeProvider>
  );
};

export default App;
