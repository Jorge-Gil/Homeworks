import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const OnClick = () => {
    inputRef.current.select();
    console.log(inputRef.current.value);
  };

  return (
    <>
      <h1> FocusScreen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Ingrese su nombre"
      />

      <button
        className="btn btn-outline-primary mt-5"
        onClick={() => OnClick()}
      >
        Focus
      </button>
    </>
  );
};
