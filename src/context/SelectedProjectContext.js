import React, { useContext, createContext, useState } from "react";
import { useProjects } from "../hooks/index";
export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({ children }) => {
  const [SelectedProject, setSelectedProject] = useState("INBOX");

  return (
    <SelectedProjectContext.Provider
      value={{ SelectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
