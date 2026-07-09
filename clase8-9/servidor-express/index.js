import express from 'express';

const app = express();//declamos nuestro servidor express

//metodo get primero definios la uri (ultima parte del endpoint)"/"(vacio)
//despues viene rep y res, del parametro req(request) voy abtener el body de la request
//toda la info de mi solicitud que llego al servidor 
//, con el res: responder y setear los headers todo es una funcion colback que se ejecuta cuando llega la request
app.get('/', (req, res) => {
  res.send('Hola mundo desde Express');
});

//con este puedo hacer localhost:3000/products 
app.get('/products', (req, res) => {
  res.send('Hola mundo desde PRODUCTOS');
});
//de este manera se declaran los demas metodos get,post,put,delete

//aca levanto el servidor en el puerto 3000 y le paso un callback para que me diga que esta escuchando
app.listen(3000, () => {
  console.log('servidor en httpp://localhost:3000');
});



