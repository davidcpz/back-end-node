// metodos de string 

const texto = "Hola mundo";

// length: devuelve la longitud del string
console.log(texto.length);//10

// toUpperCase: convierte el string a mayúsculas
console.log(texto.toUpperCase());//HOLA MUNDO

// toLowerCase: convierte el string a minúsculas
console.log(texto.toLowerCase());//hola mundo   

//includes: verifica si el string contiene una subcadena 
console.log(texto.includes("Mundo"));//true si hay mayuscula lo va a detectar 
console.log(texto.includes("mundo"));//false


//indexOf(): devuelve la posición de la primera aparición de una subcadena
console.log(texto.indexOf("mundo"));//5 devuelve la posicion de la palabra mundo
console.log(texto.indexOf("Mundo"));//-1 no encuentra la palabra mundo con mayuscula

//slice(): extrae una parte del string y devuelve una nueva cadena
console.log(texto.slice(0, 4));// Hola extrae desde la posicion 0 hasta la 4 sin incluirla
console.log(texto.slice(5, 10));//mundo extrae desde la posicion 5 hasta la 10 sin incluirla    

//replace(): reemplaza una subcadena por otra
console.log(texto.replace("mundo", "amigo"));//Hola amigo reemplaza la palabra mundo por amigo
console.log(texto.replace("Mundo", "amigo"));//Hola mundo no encuentra la palabra Mundo con mayuscula

//trim() elimina los espacios en blanco al inicio y al final del string
const textoConEspacios = "   Hola mundo   ";
console.log(textoConEspacios.trim());//"Hola mundo" elimina los espacios al inicio y al final


//split(): divide el string en un array de subcadenas
const palabras = texto.split(" ");//divide el string por los espacios
console.log(palabras);//["Hola", "mundo"] devuelve un array con las palabras del string 




