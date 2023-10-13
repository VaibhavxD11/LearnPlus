import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import "./theme/darkMode.css";
import "./theme/colors.css";
import "./theme/glass.css";

import { AppProvider } from "./context/context.js";
import { ScrollToTop } from "./components/index.js";

ReactDOM.render(
  <AppProvider>
    <HashRouter>
      <ScrollToTop/>
      <App />
    </HashRouter>
  </AppProvider>,
  document.getElementById("root")
);
