import React, { useState } from "react";

export const TodoAdd = ({ handleAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    handleAddTodo({
      id: new Date().getTime(),
      description: newTodo,
      done: false,
    });
    setNewTodo("");
  };

  return (
    <div>
      <h4> Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-gray-600 rounded-md p-2"
          name="description"
          autoComplete="off"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" >
          Agregar
        </button>
      </form>
    </div>
  );
};
