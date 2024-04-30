//  15. Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  nombres=[0, 0, 0, 0, 0](leer);
// Los calculos o procesos que se hacen con las variables
// Proceso: Para i=0 hasta 4 hacer
//          Escribir "Ingrese cinco nombres", i+1, ":"
//          Leer nombres[i]
//          FinPara
//   aux=nombres[0]
//   nombres[0]=nombres[4]
//   nombres[0]=aux
// La informacion de las variables procesadas
// Salida: Escribir"Los nombres ingresados son:", nombres

// Seupdocodigo:
// Algoritmo asignarNombresArreglo
//    Declarar nombres=["", "", "", "", ""];
//    Para i=0 hasta 4 hacer
//       Escribir "Ingrese cinco nombres", i+1, ":"
//       Leer nombres[i]
//    FinPara
//    aux=nombres[0];
//    nombres[0]=nombres[4];
//    nombres[0]=aux;
// escribir"nombres intercambiados",nombres}
//    Escribir "Los nombres ingresados son:", nombres;
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function asignarNombresArreglo() {
    let nombres=["","","","",""]
   for (let i = 0; i < 5; i++) {
      write(`Ingrese cinco nombre ${i + 1}:`);
      nombres[i] = read();
   }
let  aux=nombres[0];
     nombres[0]=nombres[4];
     nombres[4]=aux;
     write("nombres intercambiados",nombres)
}

// se llama o se ejecuta la funcion
asignarNombresArreglo()