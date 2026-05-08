// METODOS PARA LS OBJETOS (los objetos se declaran con llaves {} y tienen propiedades y valores)
const persona = {
    nombre: "Juan",
    edad: 30,
    estudiante: true
};

//Acceder a las propiedades del objeto
console.log(persona.nombre);

//Agregar una nueva propiedad al objeto
persona.apellido = "Gomez";
console.log(persona);

//modificar una propiedad del objeto
persona.edad = 31;
console.log(persona);

//eliminar una propiedad del objeto
delete persona.estudiante;
console.log(persona);

//keys: devuelve un array con las claves del objeto
const claves = Object.keys(persona);
console.log(claves);//["nombre", "edad", "apellido"] devuelve un array con las claves del objeto persona    

//values: devuelve un array con los valores del objeto
const valores = Object.values(persona);
console.log(valores);//["Juan", 31, "Gomez"] devuelve un array con los valores del objeto persona   

//entries: devuelve un array con los pares clave-valor del objeto
const entradas = Object.entries(persona);
console.log(entradas);//[["nombre", "Juan"], ["edad", 31], ["apellido", "Gomez"]] devuelve un array con los pares clave-valor del objeto persona    

//desestructuración: permite extraer valores de un objeto y asignarlos a variables
const { nombre, edad } = persona;
console.log(nombre, edad);//"Juan", 31 extrae las propiedades nombre y edad del objeto persona y las asigna a variables con el mismo nombre

//spread operator: permite copiar las propiedades de un objeto a otro objeto
const persona2 = { ...persona, ciudad: "Madrid" };
console.log(persona2);//{ nombre: "Juan", edad: 31, apellido: "Gomez", ciudad: "Madrid" } crea un nuevo objeto persona2 con las propiedades de persona y una nueva propiedad ciudad 

