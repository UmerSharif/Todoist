import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import "./App.scss";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

function App({ defaultDarkmode = false }) {
  const [darkmode, setDarkmode] = useState(defaultDarkmode);
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className={darkmode ? "darkmode" : undefined}>
          <Header darkmode={darkmode} setDarkmode={setDarkmode} />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
