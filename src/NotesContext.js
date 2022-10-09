import React from "react";
import { useLocalObservable } from "mobx-react";
import mainStore from "./main-store";

const NotesContext = React.createContext(null);

export const NotesProvider = ({ children }) => {
  const notesStore = useLocalObservable(() => mainStore);
  console.log(mainStore);
  return <NotesContext.Provider value={notesStore}>{children}</NotesContext.Provider>;
};

export const useStore = () => React.useContext(NotesContext);
