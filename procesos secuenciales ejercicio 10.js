//  10. Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: numero1=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:  Escribir Ingrese el primer número";
//            Leer número1 
//         Si Cnúmero1 >=100) Entonces
//           escribir "El numero es mayor a 100"
//  sino
//           escribir "El numero es menor a 100" 
// La informacion de las variables procesadas
// Salida: escribir "gracias por su visita"

// Seupdocodigo:

// Algoritmo 
// Declarar número1=0
// Escribir Ingrese el primer número";
// Leer número1
// Si Cnúmero1 >=100) Entonces
//       escribir "El numero es mayor a 100"
// sino
//       escribir "El numero es menor a 100" 
//  escribir "gracias por su visita"
//finAlgoritmo
const read = require('prompt-sync')();
const write = console.log


function menorMayor(){
let número1=0;
numero1=read ("ingrese un numero: ");
numero1=parseFloat=(numero1)
if (numero1>=100){
    write ("El numero es mayor a 100")
}
else {
    write ("El numero es menor a 100")
}
 write("gracias por su visita")
}
// se llama o se ejecuta la funcion
menorMayor()