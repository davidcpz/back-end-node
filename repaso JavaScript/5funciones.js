//funciones basicas 

//funcion flecha
export const sumar = (a, b) => a + b;//lo que esta adentro de los paretesis son parametros de la funcion
//  y lo que esta despues de la flecha es el valor que devuelve la funcion

export const restar = (a, b) => a - b;// no son obligatorios los parametros de la funcion 
export const multiplicar = (a, b) => a * b;
export const dividir = (a, b) => a / b;


//otra manera 
function sumar2(a, b) {
    return a + b;// el return es lo que devuelve la funcion
}


const multiplicar2 = function (a, b) {
    return a * b;
}

const dividiir= (a,b) => {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}   


sumar (5, 3);//8
const resultadoSuma = sumar(5, 3);
console.log(resultadoSuma);//8

console.log(restar(5, 3));//2
console.log(multiplicar(5, 3));//15
console.log(dividir(5, 3));//1.6666666666666667     
console.log(dicidir(5, 0));//No se puede dividir por cero

//PROMESAS
const promesa = new Promise((resolve, reject) => {//ADENTRO DEL PARENTESIS VAN LOS PARAMETROS QUE SON LAS FUNCIONES QUE YO VOY A UTILIZAR PARA CUANDO MI PROMESA SE RESUELVE DE FORMA CORRECTA 
    const exito = true;//puede ser una condicion que se cumpla o no
    if (exito) {
        resolve("La promesa se resolvió correctamente");//si la promesa se resuelve correctamente se ejecuta esta funcion   
    } else {
        reject("La promesa se rechazó");//si la promesa se rechaza se ejecuta esta funcion
    }   
});

promesa.then(resultado => {
    console.log(resultado);//La promesa se resolvió correctamente si la promesa se resuelve correctamente se ejecuta esta funcion
}).catch(error => {
    console.log(error);//La promesa se rechazó si la promesa se rechaza se ejecuta esta funcion
}).finally(() => {
    console.log("La promesa ha finalizado");//esta funcion se ejecuta siempre al final de la promesa sin importar si se resolvió o se rechazó
});



export const sumaAsync = (a, b) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
};

