// 21.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: arreglo = [];(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: si (arreglo[1] > mayor) 
//          mayor = arreglo[1];
//          mayor = arreglo[0];
//          FinSi
//          Si (arreglo[1] > mayor) 
//          mayor = arreglo[1];
//          FinSi
//          si (arreglo[2] > mayor) 
//          mayor = arreglo[2];
//          finSi
// La informacion de las variables procesadas
// Salida:  escribir "El mayor elemento del arreglo es:", mayor;
// Seupdocodigo:

// Algoritmo encontrarMayor
//    Declarar arreglo = [];
//    Leer arreglo = [];
//     si (arreglo[1] > mayor) 
//          mayor = arreglo[1];
//          mayor = arreglo[0];
//          FinSi
//          Si (arreglo[1] > mayor) 
//          mayor = arreglo[1];
//          FinSi
//          si (arreglo[2] > mayor) 
//          mayor = arreglo[2];
//          finSi
//        escribir "El mayor elemento del arreglo es:", mayor;
// FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log;

function encontrarMayor() {
   let arreglo = [];

   write("Ingrese 3 elementos para el arreglo:");
   for (let i = 0; i < 3; i++) {
      arreglo[i] = parseFloat(read());
   }

   let mayor = arreglo[0];

   if (arreglo[1] > mayor) {
      mayor = arreglo[1];
   }

   if (arreglo[2] > mayor) {
      mayor = arreglo[2];
   }

   write("El mayor elemento del arreglo es:", mayor);
}

encontrarMayor();
