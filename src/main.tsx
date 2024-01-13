import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./theme/index.ts";
import { ThemeProvider } from "styled-components";

// ReactDOM.createRoot(document.getElementById('root')).render(
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.default}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
