import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <NotificationContainer />
  </>
);

reportWebVitals();
