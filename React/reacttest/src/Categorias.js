import React from "react";
import { useState } from "react";

const Categorias = () => {
  const [categories, setCategories] = useState["first category"];
  const [category, setCategory] = useState("");

  const onAddCategory = () => {
    setCategories((list) => [...list, category]);
    setCategory("");
  };

  const onSetCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <h1>GifExpert </h1>
      <input
        type="text"
        value={category}
        onChange={(event) => onSetCategory(event)}
      />
      <button onClick={() => onAddCategory()}>Agregar Categoria</button>
      <ol>
        {categories.map((category, key) => {
          return <li key={key}> {category} </li>;
        })}
      </ol>
    </>
  );
};

export default Categorias;
