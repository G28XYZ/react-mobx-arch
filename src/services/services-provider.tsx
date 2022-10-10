import React from "react";
import { useLocalObservable } from "mobx-react-lite";

export const ServicesContext = React.createContext(null);

export const ServicesProvider = ({ children, services }: any) => {
  const store = useLocalObservable(() => services);
  return <ServicesContext.Provider value={store}>{children}</ServicesContext.Provider>;
};
