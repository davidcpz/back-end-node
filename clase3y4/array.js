const frutas = ["manzana", "banana", "naranja"];

// Acceder a elementos
console.log(frutas[0]); // manzana
console.log(frutas[1]); // banana
console.log(frutas[2]); // naranja
console.log(frutas.length - 1); // 2    


frutas.push("uva"); // Agrega "uva" al final del array
console.log(frutas); // ["manzana", "banana", "naranja", "uva"] 

frutas.unshift("pera"); // Agrega "pera" al inicio del array
console.log(frutas); // ["pera", "manzana", "banana", "naranja", "uva"] 

frutas.pop(); // Elimina el último elemento del array
console.log(frutas); // ["pera", "manzana", "banana", "naranja"]    

frutas.shift(); // Elimina el primer elemento del array
console.log(frutas); // ["manzana", "banana", "naranja"]    

const frutas_join = frutas.join(", "); // Une los elementos del array en una cadena separada por ", "
console.log(frutas_join); // "manzana, banana, naranja" 

const frutas_mausculas = frutas.map(fruta => fruta.toUpperCase()); // Crea un nuevo array con los nombres de las frutas en mayúsculas
console.log(frutas_mausculas); // ["MANZANA", "BANANA", "NARANJA"]  

const frutas_filtradas = frutas.filter(fruta => fruta.startsWith("b")); // Crea un nuevo array con las frutas que comienzan con "b"
console.log(frutas_filtradas); // ["banana"]    

const frutas_con_a = frutas.filter(fruta => fruta.includes("a")); // Crea un nuevo array con las frutas que contienen la letra "a"
console.log(frutas_con_a); // ["manzana", "banana", "naranja"]  

const frutas_reduce = frutas.reduce((acumulador, fruta) => acumulador + fruta.length, 0); // Suma la longitud de los nombres de las frutas
console.log(frutas_reduce); // 21 (6 + 6 + 7)   


//forEach -> ejecuta una funcioon para cada elemento del array
frutas.forEach(fruta => console.log(fruta)); // Imprime cada fruta en una línea separada  

// for of -> itera sobre los elementos del array
for (const fruta of frutas) {
    console.log(fruta); // Imprime cada fruta en una línea separada
}   

const stringMultilinea = `linea 1
linea 2
linea 3`;

console.log(stringMultilinea);

console.log ( 'variable : ${stringMultilinea}'); // No se interpreta la variable, se muestra tal cual
console.log ( `variable : ${stringMultilinea}`); // Se interpreta la variable, se muestra su valor


