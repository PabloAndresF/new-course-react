import React from "react";
const TodoList = (props) => {
  return (
    <ul style={{ listStyle: "none" }}>
      <li>{props.children}</li>
    </ul>
  );
};

export { TodoList };
