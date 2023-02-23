import React from "react";
import { useState } from "react";

export const useCounter = (value) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
      setCounter(counter + 1);
    };
  
    const handleReset = () => {
      setCounter(value);
    };
  
    const handleSubstract = () => {
      setCounter(counter - 1);
    };
    return (
      <>
        <h1>Counter </h1>
        <span>{counter} </span>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubstract}>-1</button>
      </>
    );
};