import React from "react";

export const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.description}</span>
            <button>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
