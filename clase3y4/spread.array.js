const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2]; // el operador spread (...) se utiliza para combinar los elementos de ambos arrays en uno nuevo.
console.log(array3); // [1, 2, 3, 4, 5, 6]  

array4=[array1, array2]; // si no utilizamos el operador spread, el resultado es un array de arrays, es decir, un array que contiene los dos arrays originales como elementos separados.
console.log(array4); // [[1, 2, 3], [4, 5, 6]]
console.log(...array3); // 1 2 3 4 5 6


