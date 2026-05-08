// METODOS 
const frutas = ["manzana", "banana", "naranja"];

//push: agrega un elemento al final del array
frutas.push("pera");
console.log(frutas);//["manzana", "banana", "naranja", "pera"]  


//pop: elimina el último elemento del array
frutas.pop();
console.log(frutas);//["manzana", "banana", "naranja"]

//shift: elimina el primer elemento del array
frutas.shift();
console.log(frutas);//["banana", "naranja"]     

//unshift: agrega un elemento al inicio del array
frutas.unshift("manzana");
console.log(frutas);//["manzana", "banana", "naranja"]

//map: crea un nuevo array con los resultados de la función aplicada a cada elemento del array
const frutasMayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMayusculas);//["MANZANA", "BANANA", "NARANJA"]    

//filter: crea un nuevo array con los elementos que cumplen una condición
const frutasConA = frutas.filter(fruta => fruta.includes("a"));
console.log(frutasConA);//["manzana", "banana", "naranja"] devuelve un array con las frutas que contienen la letra a    

//find: devuelve el primer elemento que cumple una condición
const frutaConN = frutas.find(fruta => fruta.includes("n"));
console.log(frutaConN);//"banana" devuelve la primera fruta que contiene la letra n 

//indexOf: devuelve la posición de la primera aparición de un elemento en el array
const indexDeNaranja = frutas.indexOf("naranja");
console.log(indexDeNaranja);//1 devuelve la posición de la fruta naranja en el array frutas 

// length: devuelve la longitud del array   
console.log(frutas.length);//3 devuelve la cantidad de elementos en el array frutas

//reduce reduce el array a un solo valor aplicando una función a un acumulador y a cada elemento del array
const concatenarFrutas = frutas.reduce((acumulador, fruta) => acumulador + " " + fruta);
console.log(concatenarFrutas);//"manzana banana naranja" devuelve un string con todas las frutas concatenadas

//forEach: ejecuta una función para cada elemento del array
frutas.forEach(fruta => console.log(fruta));//manzana banana naranja imprime cada fruta en una línea diferente

