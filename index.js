const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express();

// db conexion
dbConnection();


//cors
app.use(cors())

//directorio public
app.use( express.static('public') )

//lectura del body
app.use( express.json() );

//rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));




//TODO: CRUD Eventos


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT } `);
});

