//4. Pedir al usuario un número y mostrar su doble.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: numero1=0(leer),resultado=0
// Los calculos o procesos que se hacen con las variables
// Proceso: resultado = numero1 + numero1
// La informacion de las variables procesadas
// Salida: resultado
// Seupdocodigo:

// Algoritmo unir
//   declarar numero1=0,resultado=0
//   Escribir "Ingrese el primer numero"
//   Leer numero1
//   resultado = numero1 + numero1
//   Escribir resultado
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log

function unir(){
    let numero1=0,resultado=0.0
    numero1 = read("Ingrese un numero:")
    numero1=parseFloat(numero1)
    resultado= numero1+numero1
    write(resultado)
}
// se llama o se ejecuta la funcion
unir()