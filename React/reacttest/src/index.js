import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Form } from "react-router-dom";
import "./index.css";
import { AppRoutes } from "./Routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store";
import {Registro} from "./Registro";
// import App from "./App";
import FirstApp from "./FirstApp";
import Categorias from "./Categorias";
import reportWebVitals from "./reportWebVitals";
import AddCategory from "./AddCategory";
import ComponentApp from "./ComponentApp";
import GiftExpertApp from "./GiftExpertApp";
import { MultipleCustomHooks } from "./MultipleCustomHooks";
import { FocusScreen } from "./FocusScreen";
import { Memorize } from "./Memorize";
import { MemoHook } from "./MemoHook";
import { Father } from "./Father";
import { TodoApp } from "./TodoApp";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//     <FirstApp />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
  <Registro />
        {/* <App /> */}
        {/* <FirstApp value={0} /> */}
        {/* <Categorias />  */}
        {/* <MultipleCustomHooks />
    <FocusScreen /> */}
        {/* <Memorize />
    <MemoHook />
    <Father />
    <TodoApp />
    <GiftExpertApp /> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
