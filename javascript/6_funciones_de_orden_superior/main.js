// Recibir funciones como parámetros

const numeros = [1, 2, 3, 4];

function porCadaUno(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

porCadaUno(numeros, console.log);
// 1
// 2
// 3
// 4

// Retornar funciones
// Además de recibir funciones como parámetros, una función de orden superior puede devolver una nueva función. 
// Esta técnica permite crear funciones más especializadas y configurables
// 
function mayorQue(n) {
    console.log(`Comparando ${n}`);
    return function(m) {
        console.log(`Comparando ${m} con ${n}`);
        return m > n;
    }
}

let mayorQueDiez = mayorQue(10);
console.log(mayorQueDiez);
console.log(mayorQueDiez(12)); // true
console.log(mayorQueDiez(8));  // false.

const frutas = ['manzana', 'banana', 'naranja', 'manzana', 'naranja', 'banana', 'banana'];

const conteoFrutas = frutas.reduce(function(conteo, fruta) {
    conteo[fruta] = (conteo[fruta] || 0) + 1;
    return conteo;
}, {});

console.log(conteoFrutas);
// { manzana: 2, banana: 3, naranja: 2 }