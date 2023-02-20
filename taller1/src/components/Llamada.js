import React from "react";
import { useState } from "react";
import { CalcularHora } from "./CalcularHora";

const CalcularPrecio = () => {
  const [precio, setPrecio] = React.useState(0);
  if (CalcularHora() < 3) {
    return setPrecio(100);
  }
};

export default function Llamada() {
  return (

  <div>Llamada</div>);
}
