import { useState } from "react";

function MatrizTabla({ matrix }) {
  const [suma, setSuma] = useState([]);

  // Calculate the sums of each column
  const calculaSuma = () => {
    const sumas = Array(matrix[0].length).fill(0);

    matrix.forEach((row) => {
      row.forEach((value, index) => {
        sumas[index] += value;
      });
    });

    setSuma(sumas);
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <table className="w-full text-center">
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
          <tr>
            {suma.map((suma, index) => (
              <td key={index}>{suma}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        onClick={calculaSuma}
      >
        Sumar Valores
      </button>
    </div>
  );
}

export default function Matriz() {
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  return (
    <div className="container mx-auto mt-4">
      <MatrizTabla matrix={matriz} />
    </div>
  );
}
