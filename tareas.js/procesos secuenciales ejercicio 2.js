//     1. Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: edad=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:  Escribir Ingrese su edad";
//            Leer edad
//         Si Cedad >=18) Entonces
//           escribir "Es mayor de edad"
//  sino
//           escribir "Es menor de edad" 
// La informacion de las variables procesadas
// Salida: escribir "gracias por su visita"

// Seupdocodigo:

// Algoritmo 
// Declarar edad=0
// Escribir Ingrese su edad";
// Leer edad
// Si Cedad >=18) Entonces
//       escribir "Es mayor de edad"
// sino
//       escribir "Es menor de edad" 
//  escribir "gracias por su visita"
//finAlgoritmo
const read = require('prompt-sync')();
const write = console.log


function edad(){
let edad=0;
edad=read ("ingrese su edad: ");
edad=parseFloat=(edad)
if (edad>=18){
    write ("Es mayor de edad")
}
else {
    write ("Es menor de edad")
}
 write("gracias por su visita")
}
// se llama o se ejecuta la funcion
edad()