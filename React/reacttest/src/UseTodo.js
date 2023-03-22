import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

const useTodo = (initialState) => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo,
    };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] DELETE TODO",
      payload: id,
    };
    dispatchTodo(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] TOGGLE TODO",
      payload: id,
    };
    dispatchTodo(action);
  };

  const countTodos = () => {
    return todos.length;
  };

  const countPendingTodos = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    countTodos,
    countPendingTodos,
  };
};

export default useTodo;
