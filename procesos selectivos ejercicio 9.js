//9. Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: nombre1=0(leer),nombre2=0(leer), limite=0(leer),resultado=0(proceso),contador(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:("ingrese un numero de tabla de muktiplicae") 
//  Para contador desde 1 hasta limite con paso 1 hacer
// La informacion de las variables procesadas
// Salida:  numero1."x",contador"=",resultado;

// Seupdocodigo:
// Algoritmo unir
//   declarar nombre1=0,nombre2=0(leer), limite=0, resultado=0,contador
//  Escribir " ingrese un numero de la tabla dse multiplicar";
//  leer numero1
//  Escribir " ingrese el limite de la tabla ";
//  leer numero2
// Para contador desde 1 hasta limite con paso 1 hacer
//  resultado<-numero2+numero1
//  escribir  numero1."x",contador"=",resultado;
// FinAlgoritmo
 
const read = require('prompt-sync')();
const write = console.log;

function tablaMultiplicar() {
   let numero = 0, tabla = "";
   write("Ingrese un número:");
   numero = parseInt(read());
   for (let i = 1; i <= 10; i++) {
      tabla += `${numero} x ${i} = ${i * numero}\n`;
   }
   write(tabla);
}

tablaMultiplicar();

