import { readProductsFile } from './src/modelos/products.modelo.js';


const _dirname = import.meta.dirname;
console.log(_dirname);

console.log(process.cwd());

readProductsFile().then((products) => {
    console.log(products);
}).catch ((error) => {
    console.error('Error al leer el archivo de productos:', error);
});   
