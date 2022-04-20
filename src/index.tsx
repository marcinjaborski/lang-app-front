import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./components/styles/Global";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
