import React from "react";
import { ThemeProvider } from "styled-components";
import Homepage from "./pages/homepage/Homepage";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Homepage />
    </ThemeProvider>
  );
};

export default App;
