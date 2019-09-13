import React from "react";
import { Header } from "./components/layout/Header";
import { SideBar } from "./components/layout/SideBar";
import { Tasks } from "./components/Tasks";
import "./App.scss";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

function App() {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <SideBar />
          <Tasks />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
