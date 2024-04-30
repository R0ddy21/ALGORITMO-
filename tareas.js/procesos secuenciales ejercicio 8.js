// 8.	Pedir al usuario un número y mostrar si es múltiplo de 3
// analisis del requerimiento
// Entero:numero=0(leer),reciduo=0(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: recidio = numero % 3
//      si reciduo==0 entonces
//         escribir "El numero es multiplo 3"
//      sino
//         escribir "El numero no es multiplo 3"
//      finsi
//      escribir "gracias por su visita..."
// La informacion de las variables procesadas
// SALIDA: mostrar el mensaje

// Seupdocodigo:


// Algoritmo mutiplo3
//   declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero"
//   leer numero
//   recidio = numero % 3
//   si reciduo==0 entonces
//     escribir "El numero es multiplo 3"
//   sino
//     escribir "El numero no es multiplo 3"
//   finsi
//   escribir "gracias por su visita..."
// finAlgoritimo
const read = require('prompt-sync')();
const write = console.log

// lenjuage javascript
function multiplo3(){
  let numero = 0, reciduo = 0
  numero = read("Ingrese numero: ") //Math.random()*20//
  numero = parseInt(numero)// "9" => 9
  reciduo = numero % 3
  if (reciduo == 0) {
    write(numero," es multiplo 3")
    //num="es mutiplo"
  }  
  else{
    write(numero," no es multiplo 3")
    //num = "no es multiplo"
  }
  write("gracias por su visita...")
}
// se llama a la funcion para que se ejecute
multiplo3()