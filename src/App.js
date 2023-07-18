import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";
import "./components/TodoCounter.css";
import { MyContext } from "./components/MyContex";
import React, { useState } from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con  la Llorona", completed: false },
  {
    text: "Aprender 2 horas al dia algo nuevo en promragación",
    completed: false,
  },
  {
    text: "Probando totalTodos dinámicos",
    completed: true,
  },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });
  const search = {
    searchValue,
    setSearchValue,
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const DeleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => {
      return todo.text === text;
    });
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  return (
    <MyContext.Provider value={search}>
      <div className="App">
        <div>
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch />

          <TodoList>
            {searchTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => DeleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          <CreateTodoButton />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
