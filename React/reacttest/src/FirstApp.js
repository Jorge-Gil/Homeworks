import React from "react";
import { useState } from "react";
import { useCounter } from "./useCounter";
const FirstApp = ({ value }) => {
  // const [counter, setCounter] = useState(value);

  // const handleAdd = () => {
  //   setCounter(counter + 1);
  // };

  // const handleReset = () => {
  //   setCounter(value);
  // };

  // const handleSubstract = () => {
  //   setCounter(counter - 1);
  // };
  const { counter, Increment, Decrement, Reset } = useCounter(value);

  return (
    <>
      <h1>Counter </h1>
      <span>{counter} </span>
      {/* <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button> */}
      <button onClick={Increment}>+1</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrement}>-1</button>
    </>
  );
};

export default FirstApp;
