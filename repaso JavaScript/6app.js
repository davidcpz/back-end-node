import {
    sumar,
    restar,
    multiplicar,
    dividir,
    sumaAsync,
} from './5funciones.js';

console.log(sumar(5, 3));
console.log(restar(5, 3));
console.log(multiplicar(5, 3));
console.log(dividir(5, 3));

//uso de promesas
sumaAsync(10, 5).then(resultado => {
    console.log(" Suma async: ", resultado );//8 se ejecuta despues de 1 segundo
});

const resultadoPromesa = sumaAsync(20, 10);
console.log("Resultado promesa: ", resultadoPromesa);//Promise { <pending> } se muestra antes de que la promesa se resuelva

const resultadoPromesaAwait = async () => {
    const resultado = await sumaAsync(20, 10);
    console.log("Resultado promesa await: ", resultado);//30 se muestra despues de que la promesa se resuelva
};

resultadoPromesaAwait();

