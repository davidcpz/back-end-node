const persona ={
    nombre: "Juan",
    edad: 30,

}

const estudiante1 = {
    curso: "node.js",
}



console.log(...persona); // { nombre: 'Juan', curso: 'Matemáticas' }

const alumno1 = {...estudiante1, ...persona} // el orden es importante,
//si pongo primero el alumno y despues el persona, el alumno
//va a pisar los valores del persona, pero si pongo primero el
//persona y despues el alumno, el alumno va a tener los valores 
//del persona y no se van a pisar }
console.log(alumno1); // { curso: 'node.js', nombre: 'Juan', edad: 30 }

const alumno1 ={estudiante1, persona} // si no utilizamos el operador spread, el resultado es un objeto que contiene los dos objetos originales como propiedades separadas.
console.log(alumno1); // { estudiante1: { curso: 'node.js' }, persona: { nombre: 'Juan', edad: 30 } }
