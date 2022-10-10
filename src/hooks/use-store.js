import React from 'react';
import { ServiceContext } from "../services/service-provider";

export const useStore = () => React.useContext(ServiceContext);
