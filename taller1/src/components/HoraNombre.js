import React, { useState } from "react";

const Saludo = () => {
  const [Nombre, setNombre] = useState("");
  const [tiempo, setTiempo] = useState("");

  const cambioNombre = (event) => {
    setNombre(event.target.value);
  };

  const cambioTiempo = (event) => {
    setTiempo(event.target.value);
  };

  const getSaludo = () => {
    const hora = parseInt(tiempo.split(":")[0]);
    if (hora >= 4 && hora < 12) {
      return `Buenos días, ${Nombre}!`;
    } else if (hora >= 12 && hora < 20) {
      return `Buenas tardes, ${Nombre}!`;
    } else {
      return `Buenas noches, ${Nombre}!`;
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Mensaje de saludo</h2>
      <label className="block mb-2">Ingresa tu nombre:</label>
      <input
        type="text"
        className="block w-full mb-4 p-2 border border-gray-400 rounded"
        value={Nombre}
        onChange={cambioNombre}
      />
      <label className="block mb-2">Ingresa la hora (formato HH:MM de 24 horas):</label>
      <input
        type="text"
        className="block w-full mb-4 p-2 border border-gray-400 rounded"
        value={tiempo}
        onChange={cambioTiempo}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Obtener mensaje
      </button>
      {Nombre !== "" && tiempo !== "" && <p className="mt-4">{getSaludo()}</p>}
    </div>
  );
};

export default Saludo;