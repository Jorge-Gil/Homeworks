import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import FirstApp from "./FirstApp";
import Categorias from "./Categorias";
import reportWebVitals from "./reportWebVitals";
import AddCategory from "./AddCategory";
import ComponentApp from "./ComponentApp";
import GiftExpertApp from "./GiftExpertApp";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//     <FirstApp />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <FirstApp value={0} />
    {/* <Categorias />  */}
    <GiftExpertApp />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
