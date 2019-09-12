import React from "react";
import { Header } from "./components/layout/Header";
import { SideBar } from "./components/layout/SideBar";
import { Tasks } from "./components/Tasks";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Tasks />
    </div>
  );
}

export default App;
