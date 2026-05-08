// clase base persona y funcion constructora persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
//metodo saludar
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}


const persona10= new Persona("Ana", 28);
persona10.saludar(); // Hola, mi nombre es Ana y tengo 28 años.     
// clase derivada (herencia de Persona)


// clase derivada herencia 
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad); // llama al constructor de la clase padre (Persona)
        this.curso = curso; // nueva propiedad específica de Estudiante
    }
// metodo estudiar 
    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.curso}.`);
    }   
}

// crear instancias 
const estudiante1 = new Estudiante("Luis", 22, "Matemáticas");
const estudiante2 = new Estudiante("Sofía", 24, "Historia");

// usar metodos 
estudiante1.saludar(); // Hola, mi nombre es Luis y tengo 22 años.
estudiante1.estudiar(); // Luis está estudiando Matemáticas.
estudiante2.saludar(); // Hola, mi nombre es Sofía y tengo 24 años.
estudiante2.estudiar(); // Sofía está estudiando Historia.  


//solucion a las multiples herencias
let mixinVolador = (base)=> class extends base {
    volar() {
        console.log('volando');
    }
};

let mixinNadador = (base) => class extends base {
    nadar() {
        console.log('nadando');
    }
};

class Animal {}
class Pato extends mixinVolador(mixinNadador(Animal)) {}

let donald = new Pato();
donald.volar(); // volando
donald.nadar(); // nadando


