const express  = require('express');
require('dotenv').config()

//Crear Express App
const app = express();

app.use(express.static('public'));

//Escuchar el puerto 4000
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto', process.env.PORT);
}   
);