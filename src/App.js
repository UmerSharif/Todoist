import React from "react";
import "./App.css";
import { Header } from "./components/layout/Header";
import { SideBar } from "./components/layout/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
    </div>
  );
}

export default App;
