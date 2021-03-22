import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import { setConfig } from "react-google-translate";

setConfig({
  clientEmail: process.env.REACT_APP_GCP_CLIENT_EMAIL ?? "",
  privateKey: process.env.REACT_APP_GCP_PRIVATE_KEY ?? "",
  projectId: process.env.REACT_APP_GCP_PROJECT_ID ?? "",
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
