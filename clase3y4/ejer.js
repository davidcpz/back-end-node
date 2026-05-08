//“Imaginá que los precios de los productos del cliente están listos para 
// cargarse en el sistema” te dicen. Pero hay un detalle: antes de enviarlos, 
// tenés que calcular el IVA del 21% y presentarlos de manera clara.
//Tu misión:

//Creá un array con 10 números que representen los precios de los productos.

//Utilizá un método de array para calcular el precio con IVA incluido para
//cada valor.

//Matías te desafía a usar template literals para estructurar tu salida de 
// esta forma:

//El precio es: ${valor}.- IVA incluido.

//Imprimí cada precio ajustado en la consola siguiendo este formato. 
// Cada mensaje debe ser claro y profesional, como si estuvieras preparando 
// un reporte para el cliente.

const arrayPrecios = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
//utilizamos map para armar un nuevo array con los precios con IVA incluido,
//  multiplicando cada precio por 1.21 (que es el factor para agregar el 21% de IVA).
const precio_con_IVA = arrayPrecios.map(precio => {
    return precio * 1.21;
});


//el foreach aplicado al nuevo array mostramos por consola cual es el nuevo valor 
precio_con_IVA.forEach(precio => { console.log(`El precio es: ${precio}.- IVA incluido.`); });











