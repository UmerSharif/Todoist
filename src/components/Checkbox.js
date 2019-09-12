import React from "react";
import { firebase } from "../firebase";

export const Checkbox = props => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection("tasks")
      .docs(props.id)
      .update({ archived: true });
  };
  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox"></span>
    </div>
  );
};
