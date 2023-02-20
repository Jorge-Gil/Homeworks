import React from "react";

const calcularTiempo = (segundos) => {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos - horas * 3600) / 60);
  const segundosRestantes = segundos - horas * 3600 - minutos * 60;
  if (isNaN(segundos) || segundos < 0) {
    return alert("Ingrese un número válido");
  } else {
    return `La hora ingresada fué ${horas} Horas ${minutos} Minutos ${segundosRestantes} Segundos `;
  }
};

export default function CalcularHora() {
  const [hora, setHora] = React.useState("");

  return (
    <>
      <div className="flex flex-col items-center m-12">
        <h1 className="font-bold underline justify-center">Calcular Hora</h1>
        <input
          className=" border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none m-1"
          type="text"
          id="segundos"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1"
          onClick={() =>
            setHora(calcularTiempo(document.getElementById("segundos").value))
          }
        >
          Calcular
        </button>

        <p className= "text-center font-bold">{hora}</p>
      </div>
    </>
  );
}
