import React, { useState } from "react";
import { useCounter } from "./useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, Increment } = useCounter(10);
  const [first, setFirst] = useState(10);

  return (
    <>
      <h1>
        Memorize <Small value={counter} />
      </h1>

      <hr />

      <button className="btn btn-primary" onClick={() => Increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setFirst(20)}
      >
        +1
      </button>
    </>
  );
};
