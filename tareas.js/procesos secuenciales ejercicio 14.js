//14. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: nombre=" "(leer),notaExamen=0(calcular)
// Los calculos o procesos que se hacen con las variables
//proceso: si (notaExamen>60)entonces
//        escribir"el estudiante"," ",nombre," ","a aprobado";
//   sino
//        escribir"el estudiante"," ",nombre," ","a reprobado";
//FinSi
// La informacion de las variables procesadas
// Salida: escribir"El informe del estudiante"

// Seupdocodigo:
// declarar nombre=" ",notaExamen=0
// escribir "Ingrese el nombre del estudiante"
// leer nombre
// escribir "Ingrese la nota de examen del estudiante"
// leer notaExamen
//   si (notaExamen>60)entonces
//        escribir"el estudiante"," ",nombre," ","a aprobado";
//   sino
//        escribir"el estudiante"," ",nombre," ","a reprobado";
//     escribir"El informe del estudiante"
//FinSi


const read = require('prompt-sync')();
const write = console.log

function estudiante(){
let nombre=" ",notaExamen=0
write("Ingrese el nombre del estudiante")
nombre=(read())
write("Ingrese la nota de examen del estudiante")
notaExamen=parseInt(read())
if (notaExamen>=60){
       write ("El estudiante",nombre,"a aprobado");
}
  else{
      write("El estudiante",nombre,"a reprobado");
  }
        write("El informe del estudiante")
}
// se llama o se ejecuta la funcion
estudiante()
