import React, { useState } from "react";
import { useEffect } from "react";

const OrdenarNumeros = () => {
  const [numeros, setNumeros] = useState([]);
  const [numeroNuevo, setNumeroNuevo] = useState("");

  const cambioNumero = (event) => {
    setNumeroNuevo(parseInt(event.target.value));
  };

  const agregarNumero = () => {
    setNumeros([...numeros, numeroNuevo]);
    setNumeroNuevo("");
  };

  const ordenarNumeros = () => {
    const numerosOrdenados = numeros.sort((a, b) => a - b);
    setNumeros(numerosOrdenados);
  };

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Ordenar números</h2>
      <label className="block mb-2">Ingresa un número:</label>
      <div className="flex">
        <input
          type="number"
          className="block w-full mb-4 p-2 border border-gray-400 rounded-l"
          value={numeroNuevo}
          onChange={cambioNumero}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={agregarNumero}
        >
          Agregar
        </button>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={ordenarNumeros}
      >
        Ordenar
      </button>
      <ul className="mt-4">
        {numeros.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrdenarNumeros;
