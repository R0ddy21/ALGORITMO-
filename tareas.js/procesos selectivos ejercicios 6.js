//   6. Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  numero1=0(leer), numero2=0(leer),resultado=0(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: resultado = numero2 * numero1
// La informacion de las variables procesadas
// Salida: resultado

// Seupdocodigo:

// Algoritmo unir
//   declarar numero1=0 numero2=0,resultado=0
//   Escribir "Ingrese el primer numero"
//   Leer numero1
//   Escribir "Ingrese el segundo numero"
//   Leer numero2
//   resultado = numero2 * numero1
//   Escribir resultado
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
    
function unir(){
let numero1=0, numero2=0,resultado=0.0
numero1 = read("ingrese el primer numero: ")
numero1= parseFloat(numero1)
numero2 = read("ingrese el segundo numero: ")
numero2 = parseFloat(numero2)
resultado=numero2*numero1
write("La multiplicacion de los dos numeros ingresados son: ",resultado)
}
//se le llama o se ejecuta la funcion 
unir()