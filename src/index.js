import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { UIProvider } from "./store/context";
import './Lang'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UIProvider>
    <App />
  </UIProvider>
);
