//  13. Dado un arreglo de 5 nombres presentarlos todos
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  nombres=[0, 0, 0, 0, 0](leer);
// Los calculos o procesos que se hacen con las variables
// Proceso: Para i=0 hasta 4 hacer
//          Escribir "Ingrese cinco nombres", i+1, ":"
//          Leer nombres[i]
//          FinPara
// La informacion de las variables procesadas
// Salida: Escribir"Los nombres ingresados son:", nombres

// Seupdocodigo:
// Algoritmo asignarNombresArreglo
//    Declarar nombres=["", "", "", "", ""];
//    Para i=0 hasta 4 hacer
//       Escribir "Ingrese cinco nombres", i+1, ":"
//       Leer nombres[i]
//    FinPara
//    Escribir "Los nombres ingresados son:", nombres;
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function asignarNombresArreglo() {
    let nombres=["","","","",""];
   for (let i = 0; i < 5; i++) {
      write(`Ingrese cinco nombre ${i + 1}:`);
      nombres[i] = read();
   }
   write("Los nombres ingresados son:",nombres);
}
// se llama o se ejecuta la funcion
asignarNombresArreglo()