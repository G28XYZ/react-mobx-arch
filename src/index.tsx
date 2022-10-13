import "reflect-metadata";
import { Container } from "typedi";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { ServicesProvider } from "./services/services-provider";
export * from "./services";
import Services from "./services/services";
import config from "./services/config";
import { Provider } from "mobx-react";

Container.set("Services", new Services(config));
const services = Container.get("Services");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ServicesProvider services={services}>
      <Provider container={Container}>
        <App />
      </Provider>
    </ServicesProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
