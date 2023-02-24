import React, { useEffect } from "react";
import { useState } from "react";

export const useCounter = (value=0, step) => {
    const [counter, setCounter] = useState(value);
    // const [Increment, setIncrement] = useState(value + 1 );
    // const [Decrement, setDecrement] = useState(value -1);
    // const [Reset, setReset] = useState(value);
  
    const Increment = () => {
      setCounter(counter + 1);
      console.log(counter)
    };
  
    const Decrement = () => {
      setCounter(counter- 1);
      console.log(counter)
    };
  
    const Reset = () => {
      setCounter(value);
      console.log(counter)
    };

    // useEffect(() => {
    //     handleAdd(value);
    //     handleReset(value);
    //     handleSubstract(value);
    // }, []);

    return {
      // counter: counter,
      // Increment: Increment,
      // Decrement: Decrement,
      // Reset: Reset,
      counter,
      Increment,
      Decrement,
      Reset,
    }
};