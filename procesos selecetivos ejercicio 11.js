//   11. Solicitar al usuario una distancia en metros y mostrarla en centímetros.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  nmetros=0(leer), centimetros=0(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:  centimetros = metros * 100
// La informacion de las variables procesadas
// Salida: Escribir "La distancia en metros es: ",centimetros

// Seupdocodigo:

// Algoritmo unir
//   declarar numero1=0 numero2=0,resultado=0
//   Escribir "Ingrese la cantidad de metros";
//   Leer metros;
//   centimetros = metros * 100;
//   Escribir "La distancia en metros es: ",centimetros;
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function unir(){
    let metros=0,centimetros=0.0
    metros = read("Ingrese la cantidad de metros:")
    metros = parseFloat(metros)
    centimetros = metros * 100
    write("La distancia en metros es: ",centimetros)
}
// se llama o se ejecuta la funcion
 unir()