import { useState } from "react";

function Tabla() {
  const [filas, setFilas] = useState(0);
  const [columnas, setColumnas] = useState(0);

  const crearTabla = () => {
    const tabla = [];

    for (let i = 0; i < filas; i++) {
      const children = [];

      for (let j = 0; j < columnas; j++) {
        children.push(<td>{`${i},${j}`}</td>);
      }

      tabla.push(<tr>{children}</tr>);
    }

    return tabla;
  };

  return (
    <div>
      <label htmlFor="rows">Filas:</label>
      <input
        className="border rounded px-2 py-1"
        type="number"
        value={filas}
        onChange={(e) => setFilas(parseInt(e.target.value))}
      />

      <label htmlFor="cols">Columnas:</label>
      <input
        className="border rounded px-2 py-1"
        type="number"
        value={columnas}
        onChange={(e) => setColumnas(parseInt(e.target.value))}
      />

      <table>
        <tbody>{crearTabla()}</tbody>
      </table>
    </div>
  );
}

export default Tabla;
