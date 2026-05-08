//funcion asincronica con callback

function asyncTask (callback) {
    setTimeout(() => {
        console.log("tarea asincronica completada");
        callback();
    }, 3000);

}


console.log("inicio de la tarea ")//entre en la call stack
asyncTask(() => {
    console.log("fin de la tarea");
});



// ejemplo de promesa 

function taskAsync () {//tasKAsync es una funcion que me retorna una nueva promesa
    return new Promise((res, rej) => {//la promesa va a tener un estado resuelto o rechazado
       //res y rej son los metodos que le van a indicar a mi promesa cuando tienen que ir por el then o por el catch  
        setTimeout(() => { 
            if (Math.random() > 0.5) {
                res("tarea asincronica completada");
            } else {
                rej( new Error ("tarea asincronica fallida"))   
            }
        }, 2000);//la funcion setTimeout es una funcion asincronica que me permite ejecutar una funcion despues de un tiempo determinado, en este caso 3000 milisegundos o 3 segundos
    });
}


//const result = taskAsync(); //taskAsync me retorna una promesa, entonces result es una promesa//
//console.log(result); // Promise { <pending> } la promesa esta en estado pendiente, porque todavia no se ha resuelto ni se ha rechazado


async function executeAsyncTask() {
    console.log("inicio de la tarea async/await");
    try {
        const result2 = await taskAsync(); //await me permite esperar a que la promesa se resuelva o se rechace, entonces el codigo se va a detener en esta linea hasta que la promesa se resuelva o se rechace, si la promesa se resuelve, el resultado de la promesa se va a asignar a la variable result2, si la promesa se rechaza, el error de la promesa se va a lanzar y se va a capturar en el bloque catch
        console.log(result2); //tarea asincronica completada
    }catch (error) {
        console.log(error); //tarea asincronica fallida
    } finally {
        console.log("fin de la tarea async/await");
    }
}

executeAsyncTask();

//await executeAsyncTask();  si coloco asi me bloquea el consolog de abajo 

console.log("inicio de la promesa")//entre en la call stack
taskAsync().then((resultado)=>{
    console.log(resultado); //tarea asincronica completada
}).catch((error) => {
    console.error(error); //tarea asincronica fallida
}).finally(()=>{
    console.log("Fin de la promesa"); //tarea asincronica finalizada
});

console.log("codigo por fuera de la promesa")//entre en la call stack, el codigo por fuera de la promesa se ejecuta antes que el codigo dentro de la promesa, porque la promesa es asincronica y el codigo por fuera de la promesa es sincrono, entonces el codigo sincrono se ejecuta primero que el codigo asincronico, aunque el codigo asincronico se ejecute despues, no bloquea la ejecucion del codigo sincrono, entonces el resultado es: 



//async function executeAsyncTask() {
//    console.log("inicio de la tarea async/await");
//    try {
//        const result2 = await taskAsync(); //await me permite esperar a que la promesa se resuelva o se rechace, entonces el codigo se va a detener en esta linea hasta que la promesa se resuelva o se rechace, si la promesa se resuelve, el resultado de la promesa se va a asignar a la variable result2, si la promesa se rechaza, el error de la promesa se va a lanzar y se va a capturar en el bloque catch
//        console.log(result2); //tarea asincronica completada
//    }catch (error) {
//        console.log(error); //tarea asincronica fallida
//    } finally {
 //       console.log("fin de la tarea async/await");
//    }
//}

//exacuteAsyncTask();










