const URL = "https://fakestoreapi.com";

const metodo = process.argv[2];
const recurso = process.argv[3];
const title = process.argv[4];
const price = process.argv[5];
const category = process.argv[6];




console.log("Método recibido:", metodo);
console.log("Recurso recibido:", recurso);

// GET todos los productos
if (metodo === "GET" && recurso === "products") {

    fetch(`${URL}/products`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

}

// GET producto específico
if (metodo === "GET" && recurso.includes("/")) {

    const partes = recurso.split("/");
    const id = partes[1];

    fetch(`${URL}/products/${id}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

}

// POST crear producto
if (metodo === "POST" && recurso === "products") {

    const nuevoProducto = {
        title: title,
        price: Number(price),
        category: category
    };

    fetch(`${URL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoProducto)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

}


// DELETE producto
if (metodo === "DELETE" && recurso.includes("/")) {

    const partes = recurso.split("/");
    const id = partes[1];

    fetch(`${URL}/products/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

}



