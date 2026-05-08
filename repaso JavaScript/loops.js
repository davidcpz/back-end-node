// FOR clasico 
// se usa cuando sabemos cuantas eces queremos iterar 

for (let i = 0; i < 5; i++) {
    console.log("for: ", i);
}

//while
//se ejecuta miestras la condicion sea verdadera

let contador = 0;
while (contador < 5) {
    console.log("while: ", contador);
    contador++;
}   

//do while
//se ejecuta al menos una vez aunque la condicion sea falsa

let numero = 0;

do {
    console.log("do while: ", numero);
    numero++;
} while (numero < 5);

//for ...of
//se usa para iterar sobre elementos de un array o una cadena de texto
const furtas = ["manzana", "banana", "naranja"];
for (const fruta of furtas) {
    console.log("for of: ", fruta);
}   

// for ..in 
//recorre las propiedades de un objeto

const persona = {
    nombre: "Juan",
    edad: 30,
    estudiante: true
};
for (const clave in persona) {
    console.log("for in: ", key, persona[key]);
}

//bonus: some ()
//devuelve true si al menos un elemento del array cumple con la condicion
const numeros = [1, 2, 3, 4, 5];
const hayMayor = numeros.some(numero => numero > 3);
console.log("some: ", hayMayor);//true devuelve true porque hay un numero mayor que 3 en el array numeros   


