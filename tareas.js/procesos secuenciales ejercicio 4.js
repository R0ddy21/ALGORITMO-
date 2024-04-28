//   4. Solicitar al usuario un número y mostrar si es positivo o negativo.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: numero1=0(leer);
// Los calculos o procesos que se hacen con las variables
// Proceso:  Si Cnúmero1 >= 0) Entonces
//        escribir ("El numero es positivo")
// Sino
//       escribir ("El numero es negativo")
// FinSi
// La informacion de las variables procesadas
// Salida: escribir "gracias por su visita"
// Seupdocodigo:

// Algoritmo 
// Declarar número1=0;
// Escribir Ingrese un número";
// Leer número1
//   Si (número1 >= 0)Entonces
//      escribir "Es numero es positivo"
// Sino
//      escribir "El numero es negativo"
//  finSi
// escribir "gracias por su visita"
//finAlgoritmo

const read = require('prompt-sync')();
const write = console.log


function positivoNegativo(){
let numero1=0;
numero1=read ("Ingrese un numero: ");
numero1=parseFloat=(numero1)
if (numero1 >= 0){
    write ("El numero es positivo")
}
else {
    write ("El numero es negativo")
}
 write("gracias por su visita")
}
// se llama o se ejecuta la funcion
positivoNegativo()