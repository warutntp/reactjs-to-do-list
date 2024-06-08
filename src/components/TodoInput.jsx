import React, { useState } from "react";

const TodoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        value={todoValue}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
