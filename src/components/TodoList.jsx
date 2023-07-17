import React from "react";
import "./TodoCounter.css";
const TodoList = (props) => {
  return (
    <ul style={{ listStyle: "none" }}>
      <li>{props.children}</li>
    </ul>
  );
};

export { TodoList };
