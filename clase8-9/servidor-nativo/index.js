const http = require('http');
//traemos http que es la libreria nativa de node 

//aca estamos haciendo una solicitud
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo\n');
});

//metodo, aca abajo levantamos el servidor en el puerto 3000 y mostramos un mensaje en la consola para indicar que el servidor esta corriendo
server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/');
});