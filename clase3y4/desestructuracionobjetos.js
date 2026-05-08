const persona = {
    nombre: "Juan",
    edad: 30,   
};

const { nombre, edad } = persona; // desestructuración de objetos
console.log(nombre, edad); // Juan 30


//si lo agrego podemos tener el valor por defect, pero el objeto no se modifica
const {apellido = "Perez", nacionalidad = "Argentina"} = persona; // desestructuración con valores por defecto
console.log(apellido, nacionalidad); // Perez Argentina



