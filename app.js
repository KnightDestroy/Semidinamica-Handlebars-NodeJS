//Importar el paquete del servidor express
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

//Servir el contenido public
app.use(express.static('public'));

app.listen(port,() => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

// mostrar contenido de la carpeta public
app.use(express.static('public'));

// consultar las páginas en el webserver se utiliza el get, una función de flecha

app.get('/left-sidebar', (req, res) => {
    // utilizar el res, para responder a la petición del usuario
    res.sendFile(__dirname + '/public/left-sidebar.html' );

})
app.get('/right-sidebar', (req, res) => {
    // utilizar el res, para responder a la petición del usuario
    res.sendFile(__dirname + '/public/right-sidebar.html' );

})
app.get('/no-sidebar', (req, res) => {
    // utilizar el res, para responder a la petición del usuario
    res.sendFile(__dirname + '/public/no-sidebar.html' );

})
app.get('*', (req, res) => {
    // el comidin o *, es para validar la busqueda de una pagina
    // utilizar el res, para responder a la petición del usuario
    res.sendFile(__dirname + '/public/404.html' );

})