function calculadora (a, b, operacion) { //operqcion es una funcition hof espera otra funcion
    return operacion(a, b);
}   

console.log (calculadora(5, 3, (x, y) => x + y));   // 8
console.log (calculadora(5, 3, (x, y) => x - y)); // 2
