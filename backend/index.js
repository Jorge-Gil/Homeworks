const express  = require('express');
require('dotenv').config()

//Crear Express App
const app = express();

app.use(express.static('public'));

//Rutas
app.use('/api/auth', require('./routes/auth'));

//Escuchar el puerto 4000
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto', process.env.PORT);
}   
);