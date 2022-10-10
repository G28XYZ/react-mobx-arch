import React from "react";
import { ServicesContext } from "../services/services-provider";

const useServices = () => React.useContext(ServicesContext);

export const useStore = () => useServices().store;
