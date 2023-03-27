import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementBy } from "./counterSlice";

export const AppRedux = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>AppRedux</h1>
      <hr />

      <span> Counter is: {counter}</span>
      <button
        className="p-4 mx-2 text-white rounded-md text-lg font-medium bg-gray-700"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        className="p-4 mx-2 text-white rounded-md text-lg font-medium bg-gray-700"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <button
        className="p-4 mx-2 text-white rounded-md text-lg font-medium bg-gray-700"
        onClick={() => dispatch(incrementBy(5))}
      >
        Increment by 5
      </button>
    </>
  );
};
