// 10. Pedir al usuario dos números y mostrar el mayor.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: numero1=0(leer), numero2=0(leer),mayor=0(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:  Si Cnúmero 1 > número 2) Entonces
// mayor = número 1;
// Sino
// mayor = número 2;
//FinSi
// La informacion de las variables procesadas
// Salida: escribir "El numero mayor es: ",mayor
// Seupdocodigo:

// Algoritmo 
// Declarar número1=0, numero2=0, mayor=0
// Escribir Ingrese el primer número";
// Leer número1
// Escribir Ingrese el segundo número";
// Leer número 2,
// Si Cnúmero 1> número 2) Entonces
// mayor = número 1;
// Sino
// mayor = número 2;
// Fin Si
// escribir "El numero mayor es: ",mayor
//finAlgoritmo
const read = require('prompt-sync')();
const write = console.log

function unir() {
    let numero1=0,numero2=0,mayor=0;
    numero1 = read("Ingrese el primer numero:")
    numero1 = parseFloat(numero1)
    numero2 = read("Ingrese el segundo numero:")
    numero2 = parseFloat(numero2)
if(numero1>numero2){
     mayor=numero1;
}
else {
    mayor=numero2
}
    write("el numero mayor es : ",mayor)
}

// se llama o se ejecuta la funcion
unir()