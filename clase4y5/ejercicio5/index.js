
console.log ("programa iniciado")

const args = process.argv.slice(2); //obtengo los argumentos pasados por consola

switch(args[0]){ // el primer argumento es el metodo http
    case "GET":
        console.log("toma un dato");
        break;
    case "POST":
        if (args.length <1){
            console.log("comando incompleto");
            break
        }
        console.log(`recibimos ${args[1]} satisfactoriamente`);
        break;
    case "PUT":
        if (args.length <1){
            console.log("comando incompleto");
            break
        }
        console.log(`modificamos el item con id: ${args[1]} satisfactoriamente`);
        break;
    case "DELETE":
        if (args.length <1){
            console.log("comando incompleto");
            break
        }
        console.log(`eliminamos el item con id: ${args[1]} se elimino con exito`);
        break;
    default:
        console.log("metodo no soportado");
        break;

}

console.log("programa finalizado");

//para que corra el programa npm run start y luego el metodo que quiero 
// sino quiero que se vea las primeras dos lineas -s

// en el package.json agregue
// "type": "module" para poder usar import y export 
// importo la funcion suma del archivo sumar.js
//tambien agregue el script "start": "node index.js" 
// para poder ejecutar el archivo con npm start