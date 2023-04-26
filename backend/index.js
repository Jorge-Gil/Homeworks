const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");

//Crear Express App
const app = express();

//Base de datos
dbConnection();

app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));

//Escuchar el puerto 4000
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto", process.env.PORT);
});
