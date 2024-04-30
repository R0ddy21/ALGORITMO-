//   7. Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  gradosCelsius=0(leer),gradosFahrenheit=0(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: gradosFahrenheit = 32 + (gradosCelsius * 1.8)
// La informacion de las variables procesadas
// Salida: "La temperatura en grados fahrenheit es:"," ",gradosFahrenheit

// Seupdocodigo:

// Algoritmo unir
//   declarar gradosCelsius=0,gradosFahrenheit=0
//   Escribir "Ingrese la temperatura en grados celsius":
//   Leer gradosCelsius
//   gradosFahrenheit = 32 + (gradosCelsius * 1.8)
//   Escribir "La temperatura en grados fahrenheit es: ",gradosFahrenheit
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
    
function unir(){
let gradosCelsius=0,gradosFahrenheit=0.0
gradosCelsius = read("Ingrese la temperatura en grados celsius:")
gradosCelsius =parseFloat(gradosCelsius)
gradosFahrenheit = 32 + (gradosCelsius * 0.08)
write ("La temperatura en grados fahrenheit es: ",gradosFahrenheit,"°C")
}
//se le llama o se ejecuta la funcion 
unir()