// 5. Pedir al usuario dos números y mostrar si son iguales o diferentes.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: numero1=0(leer), numero2=0(leer),resultado=0(proceso)
// Los calculos o procesos que se hacen con las variables
//proceso: si (numero1= numeo2)entonces
//        escribir"son iguales"
//   sino
//        escribir"son diferentes"
//FinSi
// La informacion de las variables procesadas
// Salida: escribir"gracias por su visita"
// Seupdocodigo:



// Algoritmo unir
//   declarar numero1=0, numero2=0,resultado=0
//   Escribir "Ingrese el primer numero"
//   Leer numero1
//   Escribir "Ingrese el segundo numero"
//   Leer numero2
//    si (numero1 = numeo2)entonces
//        escribir"son iguales"
//   sino
//        escribir"son diferentes"
//   
//   Escribir "gracias por su visita"
 
// FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log

function unir() {
    let numero1=0,numero2=0;
    numero1 = read("Ingrese el primer numero:")
    numero1 = parseFloat(numero1)
    numero2 = read("Ingrese el segundo numero:")
    numero2 = parseFloat(numero2)
   if (numero2 == numero1){
         write("son iguales")
}
   else {
         write("son diferentes")
   }
       write("gracias por su visita")
}

// se llama o se ejecuta la funcion
unir()