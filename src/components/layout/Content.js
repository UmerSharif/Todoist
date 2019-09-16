import React from "react";
import { Tasks } from "../Tasks";
import { SideBar } from "./SideBar";
export const Content = () => {
  return (
    <section className="content">
      <SideBar />
      <Tasks />
    </section>
  );
};
