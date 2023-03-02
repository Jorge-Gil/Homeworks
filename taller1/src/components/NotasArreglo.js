import React, { useState } from "react";


function NotasArreglo() {
  const [estudiantes, setEstudiantes] = useState([
    { nombre: "", notas: [0, 0, 0] },
    { nombre: "", notas: [0, 0, 0] },
    { nombre: "", notas: [0, 0, 0] }
  ]);

  const handleEstudianteChange = (index, event) => {
    const { name, value } = event.target;
    setEstudiantes(prevEstudiantes => {
      const nuevosEstudiantes = [...prevEstudiantes];
      nuevosEstudiantes[index][name] = value;
      return nuevosEstudiantes;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-72">
      <h1 className="text-2xl font-bold mb-4">Notas Arreglo</h1>
      {estudiantes.map((estudiante, index) => {
        const { nombre, notas } = estudiante;
        const promedio = (notas.reduce((a, b) => a + b, 0)) / notas.length;
        const gana = promedio >= 3;
        return (
          <div className="flex flex-col items-center space-y-2" key={index}>
            <label className="font-bold" htmlFor={`nombre-${index}`}>
              Nombre:
            </label>
            <input
              className="border rounded py-2 px-3"
              type="text"
              id={`nombre-${index}`}
              name="nombre"
              value={nombre}
              onChange={(event) => handleEstudianteChange(index, event)}
            />
            <label className="font-bold" htmlFor={`nota1-${index}`}>
              Nota 1:
            </label>
            <input
              className="border rounded py-2 px-3"
              type="number"
              id={`nota1-${index}`}
              name="notas"
              value={notas[0]}
                onChange={(event) => handleEstudianteChange(index, event)}
            />
            <label className="font-bold" htmlFor={`nota2-${index}`}>
                Nota 2:
            </label>
            <input
                className="border rounded py-2 px-3"
                type="number"
                id={`nota2-${index}`}
                name="notas"
                value={notas[1]}
                onChange={(event) => handleEstudianteChange(index, event)}
            />
            <label className="font-bold" htmlFor={`nota3-${index}`}>
                Nota 3:
            </label>
            <input

                className="border rounded py-2 px-3"
                type="number"
                id={`nota3-${index}`}
                name="notas"
                value={notas[2]}
                onChange={(event) => handleEstudianteChange(index, event)}
            />
            <div className="flex flex-col items-center space-y-2 mt-4">
                <p className="font-bold">Promedio: {promedio}</p>
                <p className="font-bold">Gana: {gana ? "Sí" : "No"}</p>
            </div>
            </div>
        );
        })}
    </div>
    );
}

export default NotasArreglo;
             
