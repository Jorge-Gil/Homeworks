import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CalcularHora from './components/CalcularHora';
import Llamada from './components/Llamada';
import Punto3 from './components/HoraNombre';
import NumerosIguales from './components/NumerosIguales';
import OrdenarNumeros from './components/OrdenarNumeros';
import ImprimirImpares from './components/ImprimirImpares';
import Salarios from './components/Salarios';
import NumerosAleatorios from './components/NumerosAleatorios';
import Tabla from './components/Tabla';
import Matriz from './components/Matriz';
import Notas from './components/Notas';
import NotasArreglo from './components/NotasArreglo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalcularHora />
    <Llamada />
    <Punto3 />
    <NumerosIguales />
    <OrdenarNumeros />
    <ImprimirImpares />
    <Salarios />
    <NumerosAleatorios />
    <Tabla />
    <Matriz />
    <Notas />
    <NotasArreglo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
