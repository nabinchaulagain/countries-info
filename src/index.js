import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import history from "./history";
import { Router } from "react-router-dom";
import ContextProvider from "./context";
ReactDOM.render(
  <ContextProvider>
    <Router history={history}>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);
