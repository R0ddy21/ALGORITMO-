// 19. Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: arreglo=[](leer)
// Los calculos o procesos que se hacen con las variables
// proceso:  dimension a1[5]
//  Para x=0 Hasta 4 con paso 1 hacer 
//  escribir "ingrese los valores del arreglo"
//   leer elementos
//  a1[x]<- elementos
// FinPara
// si a1[0]>a1[4] entonces
// escribir "El primer numero es mayor que el ultimo numero",a1[0]
// sino
// escribir "El ultimo numero es mayor que el primer numero",a1[0]
// La informacion de las variables procesadas
// Salida: escribir "gracias por su visita"

// Seupdocodigo:
// algoritmos 
// declarar arreglo=[]
// dimension a1[5]
//  Para x=0 Hasta 4 con paso 1 hacer 
//  escribir "ingrese los valores del arreglo"
//  leer elementos
//  a1[x]<- elementos
//  FinPara
//  si a1[0]>a1[4] entonces
//  escribir "El primer numero es mayor que el ultimo numero",a1[0]
//  sino
//  escribir "El ultimo numero es mayor que el primer numero",a1[0]
//  escribir "gracias por su visita"


const read = require('prompt-sync')();
const write = console.log;


function comparaElementos(){
let arreglo=[];
write("Ingrese 5 numeros ")
for (let i=0;i<5;i++){
arreglo[i]=parseFloat(read())
}
if (arreglo[0]>arreglo[4]){
write("El primer elemento es mayor que el ultimo elemento")
}
else{
    write("El primer elemento no es mayor que el ultimo elemento")
}
}
comparaElementos()