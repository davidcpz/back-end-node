//es una forma 
//const args = process.argv
//console.log(args)

const args= process.argv.slice(2) //slice es para cortar el array y quedarnos solo con los argumentos
console.log(args) // ['hola', 'mundo']

if (args[0]=='saludar') {
    console.log(`buenas ${args[1] || "mundo"}`)
}else if (args[0]=='despedir') {
    console.log(`adios ${args[1] || "mundo"}`)
}else {
    console.log("comando no reconocido")
}

// en el comando tengo que poner node index.js ej david