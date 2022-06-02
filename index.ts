import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyle from "./components/styles/GlobalStyle";
import ContextProvider from "./components/Context";
import App from "./components/App";

const Main = () => (
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <GlobalStyle />
      <App />
    </ContextProvider>
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
render(<Main />, rootElement);
