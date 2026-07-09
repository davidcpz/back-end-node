console.log ("programa iniciado");
console.log ("hola soy codex");
import express from 'express';
import cors from 'cors';

import productsRouter from '.src/rutas/products.routes.js';


const app = express();

//esto es un middleware que permite recibir datos en formato JSON
/*app.use((req, res, next) => {
  res.header('access-control-allow-origin', 'https://example.com');
  res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
  res.header('access-control-allow-headers', 'Content-Type, Authorization');
  res.header('access-control-allow-credentials', 'true');
  next();
});
*/
app.use(cors({
  origin: (origin, callback)=>{
    if (!origin || origin === 'http:localhost: ${PORT}') {
      callback (null, true);
    } else {
      callback (new Error('No permitido por CORS'));

  }

},
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],

}));

app.use((req, res, next) => {
  console.log(`datos recibidos : ${req.method} ${req.url}`);
  next();
});

app.get("/ping", (req, res) => {
  res.send("/pong").status(200);
});


app.get("/HTML", (req, res) => {
    res.send("<h1>Hola mundo desde Express</h1>").status(200);
});

app.get("/JSON", (req, res) => {
    res.send ({
        productos: [
            {nombre: "agua", precio: 100},
            {nombre: "yerba", precio: 200},
        ]
    }).status(200);
});


app.use(productsRouter);



app.use(function (req, res, next) {
  res.status(404)
  res.send("ruta no encontrada");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`);
}); 
