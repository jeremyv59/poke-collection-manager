import React from "react";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";
// import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Sidebar />
      {/* <BrowserRouter></BrowserRouter> */}
    </ThemeProvider>
  );
};

export default App;
