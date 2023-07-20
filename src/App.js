import { TodoCounter } from "./components/Counter/TodoCounter";
import { TodoSearch } from "./components/Search/TodoSearch";
import { TodoList } from "./components/ItemList/TodoList";
import { CreateTodoButton } from "./components/CreateItem/CreateTodoButton";
import { TodoItem } from "./components/Item/TodoItem";
import "./components/Counter/TodoCounter.css";
import { MyContext } from "./contexts/MyContex";
import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TodosLoading from "./skeletons/TodosLoading";
import TodosError from "./skeletons/TodosError";
import EmpyTodos from "./skeletons/EmpyTodos";
import Modal from "./components/Modal/Modal.jsx";
import TodoForm from "./components/Form/TodoForm";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el Curso de Intro a React.js", completed: false },
//   { text: "Llorar con  la Llorona", completed: false },
//   {
//     text: "Aprender 2 horas al dia algo nuevo en promragación",
//     completed: false,
//   },
//   {
//     text: "Probando totalTodos dinámicos",
//     completed: true,
//   },
// ];

// localStorage.setItem("TODOS_V1", defaultTodos);
// localStorage.removeItem("TODODS_V1");

// function useLocalStorage(itemName, initialValue) {
//   const localStorageItems = localStorage.getItem(itemName);
//   let parsedItem;
//   if (!localStorageItems) {
//     localStorage.setItem(itemName, JSON.stringify(initialValue));
//     parsedItem = initialValue;
//   } else {
//     parsedItem = JSON.parse(localStorageItems);
//   }
//   const [item, setItem] = useState(parsedItem);
//   const saveItem = (newItem) => {
//     localStorage.setItem(itemName, JSON.stringify(newItem));
//     setItem(newItem);
//   };

//   return [item, saveItem];
// }

function App() {
  // const localStorageTodos = localStorage.getItem("TODOS_V1");
  // // let parsedTodos = JSON.parse(localStorageTodos);
  // let parsedTodos;
  // if (!localStorageTodos) {
  //   localStorage.setItem("TODOS_V1", JSON.stringify([]));
  //   parsedTodos = [];
  // } else {
  //   parsedTodos = JSON.parse(localStorageTodos);
  // }
  // const saveTodos = (newTodos) => {
  //   localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
  //   setTodos(newTodos);
  // };
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    saveTodos(newTodos);
  };
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const DeleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => {
      return todo.text === text;
    });
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };
  const search = {
    searchValue,
    setSearchValue,
    completedTodos,
    totalTodos,
    openModal,
    setOpenModal,
    handleModal,
    addTodo,
  };

  return (
    <MyContext.Provider value={search}>
      <div className="App">
        <div>
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && searchTodos.length === 0 && <EmpyTodos />}

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

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
          <CreateTodoButton />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
