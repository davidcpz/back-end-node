//Matías y Sabrina han preparado un nuevo reto para evaluar 
//tus habilidades.

//“Imagina que estás organizando información sobre una flota de 
//vehículos”, dice Sabrina. “Queremos ver cómo manejas datos más 
//estructurados”.


//1) Crea un array con 10 objetos, donde cada objeto represente
// un automóvil con la siguiente información:

//Marca
//Modelo
//Año
//Color

const arrayAutos = [
    { marca: "Toyota", modelo: "Corolla", año: 2019, color: "Rojo" },
    { marca: "Honda", modelo: "Civic", año: 2020, color: "Azul" },
    { marca: "Ford", modelo: "Focus", año: 2016, color: "Negro" },
    { marca: "Chevrolet", modelo: "Cruze", año: 2021, color: "Blanco" },
    { marca: "Nissan", modelo: "Sentra", año: 2017, color: "Gris" },    
    { marca: "Volkswagen", modelo: "Golf", año: 2022, color: "Amarillo" },
    { marca: "Hyundai", modelo: "Elantra", año: 2019, color: "Verde" },
    { marca: "Kia", modelo: "Forte", año: 2010, color: "Azul" },
    { marca: "Mazda", modelo: "3", año: 2018, color: "Rojo" },
    { marca: "Subaru", modelo: "Impreza", año: 2021, color: "Negro" }
];


//2) Usa un método de array para recorrer la lista e imprime por
//consola todos los datos de los automóviles cuyo año sea mayor
//a 2018.

//arrayAutos.forEach((auto) => {
//    console.log("marca: " + auto.marca);
//    console.log("modelo: " + auto.modelo);
//    console.log("año: " + auto.año);
//    console.log("color: " + auto.color);
//    console.log("-------------------");
//});


arrayAutos.forEach((auto) => {
    if (auto.año > 2018) {
        console.log("marca: " + auto.marca);
        console.log("modelo: " + auto.modelo);
        console.log("año: " + auto.año);
        console.log("color: " + auto.color);
        console.log("-------------------");
    }
});


//Matías añade: “Queremos que veas esto como un ejercicio para
//prepararte para trabajar con datos reales en el futuro”.

//Impresionados con tu avance, Matías y Sabrina suben un poco la
//dificultad. Sabrina te plantea: 

//“Queremos saber si puedes analizar la información de forma
//específica. Aquí tienes tu próximo desafío”.


//1-Crea una función que recorra el array de automóviles.

//function recorrerArrayAutos(color) {
  //  contador =0; // contador para contar cuantos autos tienen el color que se le pasa por parametro
    // arrayAutos.forEach((auto) => {
      //  const {color: colorAuto}= auto; //destructuring para obtener el color de cada auto, y lo renombramos a colorAuto para no confundirlo con el parametro de la funcion  
    //arrayAutos.forEach((auto) => {
      //  const {color}= auto; //destructuring para obtener el color de 
       // console.log(color);
    //});

reccorrerArrayAutos(); // llamamos a la función para que se ejecute


    
//2-Usa destructuring dentro de la función para obtener el color 
// de cada automóvil.

//3-La función debe aceptar un color como parámetro y devolver por
//consola cuántos automóviles tienen ese color.

function recorrerArrayAutos(color) {
    contador= 0
    automoviles.forEach((auto) => {
        const {colorAuto}= auto; 
        if (color.toLowerCase === colorAuto.toLowerCase()) { // comparamos el color del auto con el color que se le pasa por parametro, utilizando toLowerCase para que la comparación sea case insensitive 
            contador++;
        }   
    });
    if (contador> 0) {
    console.log(`Hay ${contador} automóviles de color ${color.toLowerCase()}.`);
    } else if (contador = 1) {
        console.log(`Hay ${contador} automóvil de color ${color.toLowerCase()}.`);
    } else {
        console.log(`No hay automóviles de color ${color.toLowerCase()}.`);
    }   
}   
recorrerArrayAutos("Azul"); // llamamos a la función con el color que queremos contar   

recorrerArrayAutos()


class Auto {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }   
    // metodo para mostrar la info del auto 
    mostrar_datos () {  
        console.log("||||||||||||||");
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Año: " + this.año);
        console.log("Color: " + this.color);
    }

}

const auto_con_clase = automoviles.map((auto) => { new Auto(auto.marca, auto.modelo, auto.año, auto.color); }); // utilizamos map para crear un nuevo array de objetos de la clase Auto a partir del array de objetos original

console.log(auto_con_clase); // mostramos por consola el nuevo array de objetos de la clase Auto    

//automiviles.forEach((auto)=>{
   // if (auto.año> 2018)}
    //    console.table("/////////")
     //   console.table('Marca: ${auto.marca}');
      //  console.table('Modelo: ${auto.modelo}');
       // console.table('Año: ${auto.año}');
        //console.table('Color: ${auto.color}');
//});   










