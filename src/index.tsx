import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { ServicesProvider } from "./services/services-provider";
import Services from "./services";
import config from "./services/config";

const services = new Services(config);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ServicesProvider services={services}>
      <App />
    </ServicesProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
