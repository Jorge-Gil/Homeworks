import React, { useState } from "react";

const CostoLlamada = () => {
  const [duracion, setDuracion] = useState(0);
  const [costoTotal, setCostoTotal] = useState(0);

  const CambioDuracion = (event) => {
    setDuracion(event.target.value);
    if (duracion < 0) {
      return alert("Ingrese una duración válida");
    }
  };

  const calculateCost = () => {
    if (duracion <= 3) {
      setCostoTotal(100);
    } else {
      const minutosAdicionales = duracion - 3;
      const costoAdicional = minutosAdicionales * 50;
      setCostoTotal(100 + costoAdicional);
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">
        Calculadora de costos de llamada
      </h2>
      <label className="block mb-2">Duración de la llamada (minutos):</label>
      <input
        type="number"
        min="0"
        className="block w-full mb-4 p-2 border border-gray-400 rounded"
        value={duracion}
        onChange={CambioDuracion}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={calculateCost}
      >
        Calcular costo
      </button>
      {costoTotal > 0 && (
        <p className="mt-4">
          El costo total de la llamada es de {costoTotal} pesos.
        </p>
      )}
    </div>
  );
};

export default CostoLlamada;
