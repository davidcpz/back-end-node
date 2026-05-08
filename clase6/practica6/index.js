//Misión 1: 

//Utiliza la API pública de Rick and Morty (docs) para obtener 
//la lista de personajes.

//Con las herramientas then, catch y finally, procesa la respuesta y 
//devuelve por consola un array con los primeros 5 resultados de 
//los 20 personajes recibidos.


//url = "https://rickandmortyapi.com/api";  
/*
function obtener5pj() {
    return new Promise ((res, rej)=>{
           
        fetch(`${url}/character`, {
            method: 'GET'
        })
        .then(response =>response.json())
        .then(data=>res(data.results.slice(0,5)))
        .catch(error => rej(error))
    })
}


obtener5pj().then (personajes => (
    console.log(personajes)
)).catch (error => (
    console.log(error)
)).finally(() => (
    console.log("Proceso finalizado")
))

*/

//Misión 2:

//Realiza el mismo ejercicio anterior, pero esta vez usa una función asíncrona
//con async y await para consumir la API.

//Asegúrate de manejar errores correctamente con un bloque try/catch.


const url = "https://rickandmortyapi.com/api";

async function obtener5pjAsync() {
    try {
        const response = await fetch(`${url}/character`, {
            method: 'GET'
        });
        let data;
        if (response.status ==200) { //si la respuesta es 200 muestra lo que tenemos 
            data = await response.json();
            return data.results.slice(0,5);
        }else {
            console.log(response.status);
        }
    } catch (error) {
        console.log(error);
    }finally {
        console.log("Proceso finalizado");
    }   
}



const data = await obtener5pjAsync();
console.table(data, ["id", "name", "status", "species",]);   

//const data = await obtener5pjAsync();
//console.log(data);
















