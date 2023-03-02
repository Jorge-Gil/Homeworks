import React, { useState } from "react";
import classNames from "classnames";

function Notas() {
  const [nombre, setNombre] = useState("");
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);

  const promedio = (nota1 + nota2 + nota3) / 3;
  const gana = promedio >= 3;

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleNota1Change = (event) => {
    setNota1(parseFloat(event.target.value));
  };

  const handleNota2Change = (event) => {
    setNota2(parseFloat(event.target.value));
  };

  const handleNota3Change = (event) => {
    setNota3(parseFloat(event.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Notas</h1>
      <div className="flex flex-col items-center space-y-2">
        <label className="font-bold" htmlFor="nombre">
          Nombre:
        </label>
        <input
          className="border rounded py-2 px-3"
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
      </div>
      <div className="flex flex-col items-center space-y-2 mt-4">
        <label className="font-bold" htmlFor="nota1">
          Nota 1:
        </label>
        <input
          className="border rounded py-2 px-3"
          type="number"
          id="nota1"
          value={nota1}
          onChange={handleNota1Change}
        />
      </div>
      <div className="flex flex-col items-center space-y-2 mt-4">
        <label className="font-bold" htmlFor="nota2">
          Nota 2:
        </label>
        <input
          className="border rounded py-2 px-3"
          type="number"
          id="nota2"
          value={nota2}
          onChange={handleNota2Change}
        />
      </div>
      <div className="flex flex-col items-center space-y-2 mt-4">
        <label className="font-bold" htmlFor="nota3">
          Nota 3:
        </label>
        <input
          className="border rounded py-2 px-3"
          type="number"
          id="nota3"
          value={nota3}
          onChange={handleNota3Change}
        />
      </div>
      <div
        className={classNames(
          "font-bold mt-4",
          gana ? "text-green-600" : "text-red-600"
        )}
      >
        {nombre && (
          <p>
            {nombre} {gana ? "gana" : "no gana"} la materia
          </p>
        )}
      </div>
    </div>
  );
}

export default Notas;
