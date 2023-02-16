import React from "react";
import { useEffect } from "react";

const ComponentApp = () => {
  const categories= ['first category', 'second category']

  return (
    <>
      <h1> Aigooo</h1>
      <ol>
        {categories.map((category, key) => {
          // <GifGrid category={category} key={key} /
        })}
      </ol>
    </>
  );
};
export default ComponentApp;