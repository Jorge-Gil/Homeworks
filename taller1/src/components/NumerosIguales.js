import React, { useState } from "react";

const NumerosIguales = () => {
  const [primerNumero, setPrimerNumero] = useState("");
  const [segundoNumero, setSegundoNumero] = useState("");
  const [tercerNumero, setTercerNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const numero1 = (event) => {
    setPrimerNumero(parseInt(event.target.value));
  };

  const numero2 = (event) => {
    setSegundoNumero(parseInt(event.target.value));
  };

  const numero3 = (event) => {
    setTercerNumero(parseInt(event.target.value));
  };

  const iguales = () => {
    if (primerNumero === segundoNumero && primerNumero === tercerNumero) {
      setResultado("Los tres números son iguales");
    } else if (primerNumero === segundoNumero || primerNumero === tercerNumero || segundoNumero === tercerNumero) {
      setResultado("Hay dos números iguales");
    } else {
      setResultado("No hay números iguales");
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Comprobar números iguales</h2>
      <label className="block mb-2">Ingresa el primer número:</label>
      <input
        type="number"
        className="block w-full mb-4 p-2 border border-gray-400 rounded"
        value={primerNumero}
        onChange={numero1}
      />
      <label className="block mb-2">Ingresa el segundo número:</label>
      <input
        type="number"
        className="block w-full mb-4 p-2 border border-gray-400 rounded"
        value={segundoNumero}
        onChange={numero2}
      />
      <label className="block mb-2">Ingresa el tercer número:</label>
      <input
        type="number"
        className="block w-full mb-4 p-2 border border-gray-400 rounded"
        value={tercerNumero}
        onChange={numero3}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={iguales}
      >
        Comprobar
      </button>
      {resultado !== "" && <p className="mt-4">{resultado}</p>}
    </div>
  );
};

export default NumerosIguales;