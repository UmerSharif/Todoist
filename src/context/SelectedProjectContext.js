import React, { useContext, createContext } from "react";
import { useProjects } from "../hooks/index";
export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({ children }) => {
  const { SelectedProject, setSelectedProject } = useProjects("INBOX");

  return (
    <SelectedProjectContext.Provider
      value={{ SelectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
