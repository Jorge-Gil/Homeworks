import React from "react";
import "./App.css";

export const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  const { id, description, done } = todo;

  return (
    <li key={id}>
      <span
        className={done ? "completed" : ""}
        onClick={() => handleToggleTodo(id)}
      >
        {description}
      </span>
      <button onClick={() => handleDeleteTodo(id)}>Borrar</button>
    </li>
  );
};
