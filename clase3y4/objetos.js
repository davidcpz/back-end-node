const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }   
};

console.log(persona.nombre); // Juan
console.log(persona.edad); // 30
persona.saludar(); // Hola, mi nombre es Juan y tengo 30 años.  

// en un objeto nos manejamos por clave valor, si quiero 
// acceder a algo del objeto lo hago por la clave, en este
// caso nombre o edad, y me devuelve el valor que tiene 
// esa clave.
// el this hace referencia al objeto en el que se encuentra,
//  en este caso persona, entonces this.nombre es igual a
//  persona.nombre y this.edad es igual a persona.edad.
// con los objetos describimos cosas del mundo real y tiene clave valor 
// tambien pueden tener funciones 

persona.nacionalidad = "Argentina"; // agregamos una nueva propiedad al objeto
console.log(persona.nacionalidad); // Argentina 




//ejemplo objeto funcional son objetos que se declaran a 
// partir de funciones
function Persona (name, age){
    this.name = name;
    this.age = age;

    this.sayHi = function() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    };
};

// declaracion de objetos
const persona1 = new Persona("Maria", 25);
const persona2 = new Persona("Carlos", 40);

persona1.sayHi(); // Hola, mi nombre es Maria y tengo 25 años.
persona2.sayHi(); // Hola, mi nombre es Carlos y tengo 40 años. 
