import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";

const AppContainer = styled.div`
  display: flex;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <BrowserRouter>
          <Sidebar />
          <Router />
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
