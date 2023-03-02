import { useState } from "react";

function ImprimirImpares() {
  const [numero, setNumero] = useState("");
  const [numerosImpares, setNumerosImpares] = useState([]);

  const handleChange = (event) => {
    setNumero(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();



    const nuevosImpares = [];
    for (let i = 1; i < numero; i += 2) {
      nuevosImpares.push(i);
    }

    setNumerosImpares(nuevosImpares);
    setNumero("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-auto">
        <h1 className="text-2xl font-bold mb-4">Números impares</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="number" className="mr-2">
          Ingrese un número:
        </label>
        <input
          type="number"
          id="number"
          value={numero}
          onChange={handleChange}
          className="border border-gray-300 p-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-2 ml-2">
          Calcular
        </button>
      </form>
      {numerosImpares.length > 0 ? (
        <p className="text-lg">
          Números impares menores que {numero}:
          {numerosImpares.map((numeroImpar) => (
            <span key={numeroImpar} className="ml-2 font-bold">
              {numeroImpar}
            </span>
          ))}
        </p>
      ) : null}
    </div>
  );
}

export default ImprimirImpares;
