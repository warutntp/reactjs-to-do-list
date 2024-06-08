import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;
  return (
    <div className="main">
      {todos.map((todo, index) => {
        return (
          <TodoCard {...props} key={index} todoIndex={index}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </div>
  );
};

export default TodoList;
