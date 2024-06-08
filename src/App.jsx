import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const persistData = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newTodos }));
  };

  const handleAddTodos = (newTodo) => {
    const newTodos = [...todos, newTodo];
    persistData(newTodos);
    setTodos(newTodos);
  };

  const handleDeleteTodo = (indexTodo) => {
    const newTodoList = todos.filter((todo, index) => {
      return indexTodo !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  const handleEditTodo = (indexTodo) => {
    const newTodos = todos(indexTodo);
    setTodoValue(newTodos);
    handleDeleteTodo(indexTodo);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
