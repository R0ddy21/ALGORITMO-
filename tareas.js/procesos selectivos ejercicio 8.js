//8. Pedir al usuario su nombre y mostrarlo tres veces
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: nombre=" "(leer),contador=" "(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: Para contador <- 1 hasta 3 hacer
// La informacion de las variables procesadas
// Salida:  nombre

// Seupdocodigo:
// Algoritmo unir
//   declarar nombre1="", contador=""
//   Escribir "Ingrese su nombre"
//   Leer nombre1 
//   Para contador <- 1 hasta 3 hacer
//   Escribir nombre1
//finPara
// FinAlgoritmo

const read = require('prompt-sync')();
const Write = console.log

function unir(){
let nombre=" ";
nombre=read("ingrse su nombre: ");
   Write(nombre)
   Write(nombre)
   Write(nombre)
}
//se le llama o se ejecuta la funcion
   unir()

   