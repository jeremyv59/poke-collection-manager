import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>App React</h1>
    </ThemeProvider>
  );
};

export default App;
