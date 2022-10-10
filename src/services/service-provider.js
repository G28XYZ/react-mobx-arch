import React from "react";
import { useLocalObservable } from "mobx-react-lite";
import mainStore from "../store/main-store";

export const ServiceContext = React.createContext(null);

export const ServiceProvider = ({ children }) => {
  const store = useLocalObservable(() => mainStore);
  return <ServiceContext.Provider value={store}>{children}</ServiceContext.Provider>;
};