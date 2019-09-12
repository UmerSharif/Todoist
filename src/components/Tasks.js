import React from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks/index";

export const Tasks = () => {
  const { tasks } = useTasks("1");

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">project name</h2>
      <ul className="task__list">
        {tasks.map(task => (
          <li key={task.id}>
            <Checkbox id={task.id}></Checkbox>
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
