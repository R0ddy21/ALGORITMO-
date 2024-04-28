//Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  producto1=0(leer), producto2=0(leer),Descuento=0(leer),totalProductos=0(calcular),totalPagarIva=0(calcular),precioFinal=0(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso:  totalProductos=producto2+producto1
//           escribir"El precio de la compra es:","$",totalProductos;
//           totalPagarIva=totalProductos+(totalProductos*15/100)
//           escribir"total a pagar incluido el iva:","$",totalPagarIva;
//           precioFinal=totalPagarIva - (totalProductos*Descuento/100)
//           escribir"total a pagar con descuento incluido",precioFinal;  
// La informacion de las variables procesadas
// Salida: Escribir "gracias por su compra"

// Seupdocodigo:
// Algoritmo unir
//   declarar producto1=0, producto2=0,Descuento=0,totalProductos=0,totalPagarIva=0,precioFinal=0
//   escribir""Ingrese el costo del primer producto""
//   leer producto1
//   escribir""Ingrese el costo del segundo producto""
//   leer producto2
//   escribir""Ingrese el descuento del producto""
//   leer Descuento
//     totalProductos=producto2+producto1
//     escribir"El precio de la compra es:","$",totalProductos;
//     totalPagarIva=totalProductos+(totalProductos*15/100)
//     escribir"total a pagar incluido el iva:","$",totalPagarIva;
//     precioFinal=totalPagarIva - (totalProductos*Descuento/100)
//     escribir"total a pagar con descuento incluido",precioFinal;      
// escribir "gracias por su compra"    
// FinAlgoritmo



const read = require('prompt-sync')();
const write = console.log;

function factura(){
let producto1=0, producto2=0,Descuento=0,totalProductos=0,totalPagarIva=0,precioFinal=0
write("Ingrese el costo del primer producto")
producto1=parseInt(read())
write("Ingrese el costo del segundo producto")
producto2=parseInt(read())
write("Ingrese el descuento del producto")
Descuento=parseInt(read())
totalProductos=producto2+producto1
write("El precio de la compra es:","$",totalProductos);
totalPagarIva=totalProductos+(totalProductos*15/100)
write("total a pagar incluido el iva:","$",totalPagarIva);
precioFinal=totalPagarIva - (totalProductos*Descuento/100)
write("total a pagar con descuento incluido",precioFinal);
write("gracias por su compra")
}
//se le llama o se ejecuta la funcion
factura()