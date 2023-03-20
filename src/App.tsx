import React from "react";
import { ThemeProvider } from "styled-components";
import Dashboard from "./components/dashboard/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
