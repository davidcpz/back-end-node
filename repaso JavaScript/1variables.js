//let: se puede reasignar
//const: no se puede reasignar

let nombre = "Juan";
nombre = "Pedro";

const apellido = "gomez";
//apellido= "perez";//

console.log(apellido);

//tipo de datos 
const texto= "Hola mundo";//string
const numero= 123;//number
const booleano= true;//boolean
const nulo= null;//null
const indefinido= undefined;//undefined 
const decimales= 3.14;//number

//Arrays
const frutas= ["manzana", "banana", "naranja"];//array de strings
console.log(frutas[0]);//manzana accedo al primer elento que es el cero 


//objetos 
const persona = {
    nombre: "Juan",
    edad: 30,
    estudiante: true
};
console.log(persona.nombre);//accedo a la propiedad nombre del objeto persona

console.log(texto, numero, booleano, nulo, indefinido, decimales);
console.log(frutas);
console.log(persona);   



