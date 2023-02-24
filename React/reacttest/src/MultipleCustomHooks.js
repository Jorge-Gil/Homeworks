import React from "react";
import { useCounter } from "./useCounter";
import { useFetch } from "./useFetch";

export const MultipleCustomHooks = () => {
  const { counter, Increment, Decrement, Reset } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  return (
    <>
   <h1>MultipleCustomHooks</h1>
    <hr />
    {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
        ) : (
        <blockquote className="blockquote text-end">
            <p className="mb-0">{data[0]?.quote}</p>
            <footer className="blockquote-footer">{data[0]?.author}</footer>
             </blockquote>
        )}

    <button className="btn btn-primary" onClick={Increment}>
        Next quote
    </button>
   { counter > 1 ? (
        
    <button className="btn btn-primary" onClick={Decrement}>
        Last quote
    </button>): <div>aigoo</div>
}
    <button className="btn btn-primary" onClick={Reset}>
        Reset
    </button>
    </>
  );
};
