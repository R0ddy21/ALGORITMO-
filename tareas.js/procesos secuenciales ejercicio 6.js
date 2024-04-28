// 6. Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: caracter=""(leer), vocalConsonante(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: Si caracter es vocal entonces
//       vocalConsonante="vocal"
//    sino
//       vocalConsonante="consonante"
//    FinSi
//    Escribir vocalConsonante
// La informacion de las variables procesadas
// Salida: vocalConsonante

// Algoritmo verificarVocalConsonante
//    Declarar caracter="", vocalConsonante=""
//    Escribir "Ingrese un carácter:"
//    Leer caracter
//    Si caracter es vocal entonces
//       vocalConsonante="vocal"
//    sino
//       vocalConsonante="consonante"
//    FinSi
//    Escribir vocalConsonante
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function verificarVocalConsonante() {
   let caracter = "", vocalConsonante = "";
   write("Ingrese un carácter:");
   caracter = read();
   if (/[aeiou]/i.test(caracter)) {
      vocalConsonante = "vocal";
   } else {
      vocalConsonante = "consonante";
   }
   write(vocalConsonante);
}

verificarVocalConsonante();
