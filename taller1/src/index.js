import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CalcularHora from './components/CalcularHora';
import Llamada from './components/Llamada';
import Punto3 from './components/HoraNombre';
import NumerosIguales from './components/NumerosIguales';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalcularHora />
    <Llamada />
    <Punto3 />
    <NumerosIguales />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
