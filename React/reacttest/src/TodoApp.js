import React from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import useTodo from "./UseTodo";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
];

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countTodos,
    countPendingTodos,
  } = useTodo(initialState);

  return (
    <>
      <h1>
        TodoApp: {countTodos()},{" "}
        <small>Pendientes: {countPendingTodos()}</small>
      </h1>
      <hr />
      <div>
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
        />
      </div>
      <div>
        <TodoAdd handleAddTodo={handleNewTodo} />
      </div>
    </>
  );
};
