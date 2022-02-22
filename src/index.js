import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import RoutingPage from "./Components/RoutingPage";
import { AuthProvider } from "./Components/ContextApi/ContextAPI";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <RoutingPage />
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
