import { useState } from "react";

function NumerosAleatorios() {
  
  const numerosAleatorios = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );

 
  const [divisorIndex, setDivisorIndex] = useState("");

  
  const handleDivisorChange = (event) => {
    setDivisorIndex(event.target.value);
  };

  
  const handleDivision = () => {
   
    const divisor = parseInt(divisorIndex);
    if (isNaN(divisor) || divisor < 0 || divisor >= numerosAleatorios.length) {
      alert("Por favor ingrese una posición válida.");
      return;
    }

    
    const resultado = numerosAleatorios.map((numero, index) =>
      index === divisor ? 0 : numero / numerosAleatorios[divisor]
    );

    alert(resultado);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">División</h1>
      <p className="mb-2">Arreglo de números aleatorios:</p>
      <ul className="list-disc pl-4">
        {numerosAleatorios.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
      <div className="mt-4">
        <label htmlFor="divisorInput" className="mr-2">
          Dividir por el número en la posición:
        </label>
        <input
          id="divisorInput"
          type="text"
          className="border rounded px-2 py-1"
          value={divisorIndex}
          onChange={handleDivisorChange}
        />
        <button
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleDivision}
        >
          Dividir
        </button>
      </div>
    </div>
  );
}

export default NumerosAleatorios;
