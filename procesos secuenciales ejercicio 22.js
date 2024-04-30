// 22.	Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: arreglo=[](leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: Para i = 0 hasta 5-1 con paso 1 hacer
//     escribir "la suma de dos elemnetos del arreglo" 
// finPara
//     suma = 0;
// si elemento of arreglo
//     suma = elemento + elementos;
// FinSi
// La informacion de las variables procesadas
// Salida: Escribir "La suma de los elementos del arreglo es:", suma


// Seupdocodigo:

// Algoritmo sumarElementos
//    Declarar arreglo=[]
//    Leer arreglo=[]
//    Para i = 0 hasta 5-1 con paso 1 hacer
//     escribir "la suma de dos elemnetos del arreglo" 
// finPara
//     suma = 0;
// si elemento of arreglo
//     suma = elementos;
// FinSi
//    Escribir "La suma de los elementos del arreglo es:", suma
// FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log;

function sumarElementos() {
   let arreglo = [];

   write("Ingrese 5 elementos para el arreglo:");
   for (let i = 0; i < 5; i++) {
      arreglo[i] = parseFloat(read());
   }

   let suma = 0;
   for (let elemento of arreglo) {
      suma += elemento;
   }

   write("La suma de los elementos del arreglo es:", suma);
}

sumarElementos();