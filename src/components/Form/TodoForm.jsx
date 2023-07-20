import React, { useContext, useState } from "react";
import "./index.css";
import { MyContext } from "../../contexts/MyContex";
const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(MyContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <p>{newTodoValue}</p>
      <label>Escribe tu nuevo Todo</label>
      <textarea
        placeholder="Add a todo"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button onClick={onCancel} className="TodoForm-buttonCancel">
          Cancel
        </button>
        <button className="TodoForm-buttonAdd" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
