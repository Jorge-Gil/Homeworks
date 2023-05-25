const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const cors = require("cors");

//Crear Express App
const app = express();

//Base de datos
dbConnection();

//CORS
app.use(cors());

app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/task", require("./routes/task"));

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

//Escuchar el puerto 4000
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto", process.env.PORT);
});
