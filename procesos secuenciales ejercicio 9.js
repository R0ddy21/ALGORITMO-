// 9. Solicitar al usuario un número y mostrar si es divisible por 2
// analisis del requerimiento
// Entrada:numero=0(leer),reciduo=0(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: recidio = numero % 2
//      si reciduo==0 entonces
//         escribir "El numero es divisible para 2"
//      sino
//         escribir "El numero no es divisible para 2"
//      finsi
//      escribir "gracias por su visita..."
// La informacion de las variables procesadas
// Salida: mostrar el mensaje

// Seupdocodigo:
 
// Algoritmo mutiplo3
//   declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero"
//   leer numero
//   recidio = numero % 2
//   si reciduo==0 entonces
//     escribir "El numero es divisible para 2"
//   sino
//     escribir "El numero no es divisible para 2"
//   finsi
//   escribir "gracias por su visita..."
// finAlgoritimo
const read = require('prompt-sync')();
const write = console.log

// lenjuage javascript
function divisible2(){
  let numero = 0, reciduo = 0
  numero = read("Ingrese numero: ") //Math.random()*20//
  numero = parseInt(numero)// "9" => 9
  reciduo = numero % 2
  if (reciduo == 0) {
    write(numero," es dibisible para 2")
    //num="es divisible"
  }  
  else{
    write(numero," no es divisible para 2")
    //num = "no es divisible"
  }
  write("gracias por su visita...")
}
// llamar a la funcion para que s ejecute
divisible2()