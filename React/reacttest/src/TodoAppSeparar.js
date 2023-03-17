import React from "react";
import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los challenges",
    done: false,
  },
];

export const TodoAppSeparar = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);
  return (
    <>
      <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>
      <hr />
      <div>
        <div>
          <ul>
            <li>
              <span>Item 1</span>
              <button className="btn btn-danger">Borrar</button>
            </li>
          </ul>
        </div>
        <div>
          <h4> Agregar TODO</h4>
          <hr />
          <form>
            <input
              type="text"
              name="description"
              placeholder="Aprender ..."
              autoComplete="off"
            />
            <button type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
