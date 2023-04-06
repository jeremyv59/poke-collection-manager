import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import GlobalStyles from "./styles/GlobalStyles";
import { Helmet } from "react-helmet";
import { theme } from "./styles/Theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";

const AppContainer = styled.div`
  display: flex;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Poke Manager</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700"
          rel="stylesheet"
        />
      </Helmet>
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
