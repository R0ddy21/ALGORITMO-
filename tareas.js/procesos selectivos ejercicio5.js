//   5. Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: edad=0(leer),año=0(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: año = 1 + edad
// La informacion de las variables procesadas
// Salida: "Tu edad el proximo año es :",año
// Seupdocodigo:

// Algoritmo unir
//   declarar edad=0,año=0
//   Escribir "Ingrese su edad"
//   Leer edad
//   año = 1 + edad
//   Escribir "Tu edad el proximo año es :",año
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function unir(){
    let edad=0,suma=0.0;
    edad = read ("Ingrese su edad: ");
    edad = parseFloat(edad)
    suma=1+edad
    write("Tu edad el proximo año es: ",suma)
}
// se llama o se ejecuta la funcion
unir()