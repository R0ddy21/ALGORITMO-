//1. Pedir al usuario su nombre y saludarlo
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: nombre1=""(leer), nombre2=""(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: nombre2 = nombre1
// La informacion de las variables procesadas
// Salida:  "hola".nombre2,"bienvenido"

// Seupdocodigo:
// Algoritmo unir
//   declarar nombre1="", nombre2=""
//   Escribir "Ingrese su nombre"
//   Leer nombre1
//   concatenar=palabra1+palabra1
//   Escribir "hola".nombre2,"bienvenido"
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea una funcion
function unir(){
    let nombre1="",nombre2=""
    nombre1=read("Ingrese su nombre: ")
    nombre2=nombre1
    write("Hola",nombre2)
}
//se llama o se ejecuta la funcion
unir()
