import { useState } from 'react';

function Salarios() {
  const [salarios, setSalario] = useState([]);
  const [salarioNuevo, setSalarioNuevo] = useState('');
  const [error, setError] = useState('');

  const handleAgregarSalario = () => {
    if (salarios.length === 10) {
      setError('Ya ha ingresado 10 salarios');
      return;
    }

    if (salarioNuevo.trim() === '') {
      setError('Ingrese un salario válido');
      return;
    }

    const salarioParse = parseFloat(salarioNuevo);
    if (isNaN(salarioParse)) {
      setError('Ingrese un salario válido');
      return;
    }

    setSalario([...salarios, salarioParse]);
    setSalarioNuevo('');
    setError('');
  };

  const incrementoSalario = () => {
    if (salarios.length !== 10) {
      setError('Ingrese exactamente 10 salarios');
      return;
    }

    const salariosIncrementados = salarios.map((salario) => salario * 1.08);
    console.log(salariosIncrementados);
  };

  return (
    <div className="flex flex-col items-center justify-center h-auto">
      <h1 className="text-lg font-bold mb-4">salarios</h1>
      <form className="mb-4">
        <label htmlFor="salary" className="mr-2">
          Ingrese un salario:
        </label>
        <input
          type="text"
          id="salary"
          value={salarioNuevo}
          onChange={(event) => setSalarioNuevo(event.target.value)}
          className="border border-gray-300 p-1"
        />
        <button
          type="button"
          onClick={handleAgregarSalario}
          className="bg-blue-500 text-white px-2 ml-2"
        >
          Agregar
        </button>
      </form>
      {error !== '' ? (
        <p className="text-red-500 font-bold">{error}</p>
      ) : null}
      {salarios.length > 0 ? (
        <div>
          <h2 className="text-lg font-bold mb-4">Lista de salarios:</h2>
          <ul>
            {salarios.map((salario, index) => (
              <li key={index} className="mb-2">
                {salario}
              </li>
            ))}
          </ul>
          {salarios.length === 10 ? (
            <button
              type="button"
              onClick={incrementoSalario}
              className="bg-blue-500 text-white px-2 mt-4"
            >
              Aumentar salarios en 8%
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Salarios;