function PedirDatos(){
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuál es tu edad?");
    let ciudad = prompt("¿En qué ciudad vives?");

    return {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad
    };  
}
function ProcesarDatos(datos){
    // Aquí puedes procesar los datos como desees
    console.log("Procesando datos...");
    let nombre = datos.nombre;
    console.log(nombre.length);
    if (nombre.length < 2){
        console.log("Tu nombre es corto.");
    }
    if (datos.edad < 18){
        console.log("Eres menor de edad.");
    }
}
function MostrarDatos(datos){
    console.log("Nombre: " + datos.nombre);
    console.log("Edad: " + datos.edad);
    console.log("Ciudad: " + datos.ciudad);
}   

let datos = PedirDatos();
console.log(datos);
ProcesarDatos(datos);
console.log("Datos procesados:");
MostrarDatos(datos);