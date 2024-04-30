//  12. Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  montoTotal=0(leer),totalProductos=0(calcular),totalPagarIva=0(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: totalProductos=montoTotal
//          escribir"El precio sin iva","$",totalProductos;
//          totalPagarIva=totalProductos+(totalProductos*15/100)
//          escribir"total a pagar incluido el iva","$",totalPagarIva);
// La informacion de las variables procesadas
// Salida: Escribir "gracias por su compra"

// Seupdocodigo:
// Algoritmo unir
//   declarar montoTotal=0,totalProductos=0,totalPagarIva=0
//   escribir"ingrese el monto total"
//   leer montoTotal
//          totalProductos=montoTotal
//          escribir"El precio sin iva","$",totalProductos;
//          totalPagarIva=totalProductos+(totalProductos*15/100)
//           escribir"total a pagar incluido el iva","$",totalPagarIva;
// FinAlgoritmo



const read = require('prompt-sync')();
const write = console.log;

function factura(){
let montoTotal=0,totalProductos=0,totalPagarIva=0
write("Ingrese el monto total")
montoTotal=parseInt(read())
totalProductos=montoTotal
write("El precio sin iva","$",totalProductos);
totalPagarIva=totalProductos+(totalProductos*15/100)
write("total a pagar incluido el iva","$",totalPagarIva);
}
//se le llama o se ejecuta la funcion
factura()