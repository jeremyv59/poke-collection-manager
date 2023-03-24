import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";

const AppContainer = styled.div`
  background-color: red;
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Sidebar />
      </AppContainer>
      {/* <Homepage /> */}
      {/* <p>Salut les copains</p> */}
    </ThemeProvider>
  );
};

export default App;
