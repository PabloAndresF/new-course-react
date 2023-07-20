import React, { useContext } from "react";
import "./TodoCounter.css";
import { MyContext } from "../../contexts/MyContex";
const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(MyContext);
  return (
    <h1>
      Has completado {completedTodos} de {totalTodos}
    </h1>
  );
};

export { TodoCounter };
