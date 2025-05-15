// Sin usar funciones (código repetitivo)
console.log("Hola, Ana");
console.log("Hola, Juan");
console.log("Hola, María");

// Usando funciones
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

saludar("Gruiz");
saludar("Juan");
saludar("María");

/////////////////////////////////////////////////////
//  Reutilización de Código
// Las funciones también promueven la reutilización de código. 
// Una vez que una función está escrita, puede ser utilizada en múltiples lugares del programa, 
// o incluso en diferentes proyectos, sin necesidad de reescribir la función. 
// Esto es particularmente útil en proyectos grandes donde las mismas tareas se realizan repetidamente.

// Función para calcular el precio final con descuento
function calcularPrecioFinal_1(precio, descuento) {
    return precio - (precio * descuento / 100);
}

// Reutilizando la función en diferentes contextos
let precioCamisa = calcularPrecioFinal_1(50, 10);
let precioPantalon = calcularPrecioFinal_1(80, 15);

console.log(`Precio final de la camisa: ${precioCamisa}`);
console.log(`Precio final del pantalón: ${precioPantalon}`);

/////////////////////////////////////////////////
//Modularidad
//La modularidad es otra ventaja significativa de usar funciones. 
// Al dividir el código en módulos más pequeños y manejables, 
// es más fácil testear, depurar y colaborar en proyectos. 
// Cada función puede ser diseñada para realizar una tarea específica, lo que simplifica la detección de errores y la optimización del código.

// Función para calcular el descuento
function calcularDescuento(precio, porcentajeDescuento) {
    return precio - (precio * porcentajeDescuento / 100);
}

// Función para calcular el precio final incluyendo impuestos
function calcularPrecioFinal(precio, descuento, impuesto) {
    let precioConDescuento = calcularDescuento(precio, descuento);
    return precioConDescuento + (precioConDescuento * impuesto / 100);
}

// Invocación
let total = calcularPrecioFinal(100, 10, 21);
console.log(total); // Muestra: 98.9

//funciones flechas
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;    

// Ejemplo de uso
let resultadoSuma = sumar(5, 3);
let resultadoResta = restar(10, 4);
let resultadoMultiplicacion = multiplicar(6, 7);
let resultadoDivision = dividir(20, 4);
console.log(`Suma: ${resultadoSuma}`);
console.log(`Resta: ${resultadoResta}`);
console.log(`Multiplicación: ${resultadoMultiplicacion}`);
console.log(`División: ${resultadoDivision}`);
// Ejemplo de función flecha sin parámetros
const saludarMundo = () => console.log("¡Hola, mundo!");
saludarMundo(); // Llama a la función flecha sin parámetros
// Ejemplo de función flecha con un solo parámetro
const cuadrado = x => x * x;
console.log(`El cuadrado de 5 es: ${cuadrado(5)}`); // Llama a la función flecha con un solo parámetro

