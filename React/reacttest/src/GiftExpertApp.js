import React from "react";
import  AddCategory  from "./AddCategory";
import  GifGrid  from "./GifGrid";
import { useState } from "react";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Dreamcatcher"]);

  const onAddCategory = (category) => {
    setCategories((list) => [...list, category]);
  };
  return (
    <>
      <h1>GitfExpert</h1>

      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category, key) => {
        return <GifGrid category={category} key={key} />;
      })}
    </>
  );
};

export default GiftExpertApp;