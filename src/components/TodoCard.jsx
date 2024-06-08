import React from "react";

const TodoCard = (props) => {
  const { children, handleDeleteTodo, todoIndex, handleEditTodo } = props;
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        {children}
        <button onClick={() => handleEditTodo(todoIndex)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(todoIndex)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
