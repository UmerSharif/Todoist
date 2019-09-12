import React from "react";

export const SideBar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar-gemeric">
        <li>Inbox</li>
        <li>Today</li>
        <li>Next 7 days</li>
      </ul>
    </div>
  );
};
