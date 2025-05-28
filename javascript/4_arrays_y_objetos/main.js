// Array vacío
const arrayVacio = [];

// Array con números
// const numeros = [1, 2, 3];

// Array con strings
const colores = ["rojo", "verde", "azul"];

// Array con varios tipos de datos
const mixto = [1, "dos", true];

const frutas = ["manzana", "banana", "cereza"];

// Acceder al primer elemento
console.log(frutas[0]);  // "manzana"

// Acceder al tercer elemento
console.log(frutas[2]);  // "cereza"

// Supongamos que tenemos el siguiente array de números
const numeros = [10, 20, 30, 40, 50];

// Para recorrer este array usaremos un bucle for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Esto imprimirá cada número del array en la consola
}
// Acceso a Elementos Específicos
// Primer Elemento: El primer elemento está en el índice 0.
// markdown console.log(frutas[0]); // Salida: Manzana

// Elemento Medio: Acceso al segundo elemento, en el índice 1.
// markdown console.log(frutas[1]); // Salida: Banana

// Último Elemento: Utilizamos length - 1 para acceder al último elemento.
// markdown console.log(frutas[frutas.length - 1]); // Salida: Cereza
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Métodos de Modificación
// Los arrays son estructuras de datos fundamentales en JavaScript, utilizadas para almacenar colecciones de elementos. 
// A continuación, exploramos cuatro métodos esenciales para manipular arrays: push, pop, shift, y unshift, acompañados de ejemplos prácticos para cada uno.
// push(): Añade un elemento al final del array.

// pop(): Elimina el último elemento del array.

// shift(): Elimina el primer elemento del array.

// unshift(): Añade un elemento al inicio del array.

// sort(): Ordena los elementos del array.

// reverse(): Invierte el orden de los elementos en el array.

// Método push
// El método push añade uno o más elementos al final de un array. Este método modifica el array original y devuelve la nueva longitud del array.
frutas.push('naranja');
console.log(frutas);  // Salida: ['manzana', 'banana', 'cereza', 'naranja']

// Método pop  
//El método pop elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
let frutaEliminada = frutas.pop();
console.log(frutaEliminada);  // Salida: 'naranja'
console.log(frutas);  // Salida: ['manzana', 'banana', 'cereza']

// Método shift
// El método shift elimina el primer elemento del array y lo devuelve, desplazando todos los elementos restantes a una posición inferior.
let primeraFruta = frutas.shift();
console.log(primeraFruta);  // Salida: 'manzana'
console.log(frutas);  // Salida: ['banana', 'cereza']

// Método unshift
// El método unshift añade uno o más elementos al inicio del array y devuelve la nueva longitud del array.

frutas.unshift('manzana');
console.log(frutas);  // Salida: ['manzana', 'banana', 'cereza']

// Método indexOf
// El método indexOf devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente. 
// Es útil para localizar la posición exacta de un elemento y es sensible a tipos de datos, es decir, diferencia entre números, strings, etc.
let nombres = ['Ana', 'Juan', 'Carlos', 'Marta'];
let indice = nombres.indexOf('Carlos');
console.log(indice);  // Salida: 2

// Método includes
// El método includes determina si un array contiene un determinado elemento, retornando true o false según corresponda. 
// Este método no proporciona la posición del elemento, sino solo la confirmación de su existencia, lo que lo hace ideal para condiciones y verificaciones rápidas.
let contiene = frutas.includes('banana');
console.log(contiene);  // Salida: true

// Concatenar Arrays
// Método join en JavaScript para Convertir Arrays en Cadenas de Texto
let resultado = colores.join();
console.log(resultado);  // "rojo,verde,azul"
let resultado2 = colores.join(' - ');
console.log(resultado2);  // "rojo - verde - azul"


// Objetos Literales y su Relación
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires"
};
const semaforo = {
    rojo: "Detenerse",
    verde: "Avanzar",
    azul: "Cuidado"
};
console.log(semaforo.rojo); // Accede al valor de la clave 'rojo': "Detenerse"

// Agregar Objetos con push
const personas = [];
console.log(personas);
personas.push({
    nombre: "Zuan",
    edad: 30,
    ciudad: "Buenos Aires"
});
personas.push({ nombre: "Luis", edad: 25, ciudad: "Santiago" });
console.log(personas);

// Ordenar Objetos con sort

// El método sort puede ser personalizado para ordenar arrays de objetos basándose en alguna clave específica de los objetos.
personas.sort((a, b) => a.edad - b.edad); // Ordena el array de objetos 'personas' por la clave 'edad'.
console.log(personas); // Ordena el array de objetos 'personas' alfabéticamente por la clave 'nombre'.

// Filtrar con filter
// Devuelve todos los elementos que cumplen la condición.

// Si no encuentra ninguno, devuelve un array vacío [].

// Tipo de retorno: un array (puede estar vacío, tener uno o varios elementos).

const mayoresDe25 = personas.filter(nombre => nombre.edad > 25);
console.log(mayoresDe25);

// Buscar un Objeto con find

// Para encontrar el primer objeto que cumple con una condición específica, se usa find.
// Devuelve el primer elemento que cumple la condición.

// Si no encuentra nada, devuelve undefined.

// Tipo de retorno: un solo elemento (o undefined).
const luis = personas.find(nombre => nombre.nombre === "Luis");
console.log(luis);