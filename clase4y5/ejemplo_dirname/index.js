const fs = require ("fs")
const path = require ("path")

const filePath = path.join(__dirname, "data", "archivo.txt")
console.log("__dirname:", __dirname)
console.log("la ruta quedo : ", filePath)

fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log("dentro del archivo : ", data)
    }
})
