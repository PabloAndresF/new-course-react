import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";
import "./components/TodoCounter.css";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el Curso de Intro a React.js", completed: false },
  { text: "Llorar con  la Llorona", completed: false },
  {
    text: "Apender 2 horas al dia algo nuevo en promragación",
    completed: false,
  },
];
function App() {
  return (
    <div className="App">
      <div>
        <TodoCounter completed={10} total={25} />
        <TodoSearch />

        <TodoList>
          {defaultTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;
