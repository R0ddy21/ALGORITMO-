// 17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
// Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
// Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2

// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: preciofinal=0,tipo=" ", tamaño=0;
// Los calculos o procesos que se hacen con las variables
//proceso:Si tipo es "A" hacer
//       Si tamaño es 1 hacer
//          Aumentar precioInicial + $2
//       Si no
//          Aumentar precioInicial + $3
//    Si no
//       Si tamaño es 1 hacer
//          Disminuir precioInicial - $3
//       Si no
//          Disminuir precioInicial - $5 
// La informacion de las variables procesadas
// Salida: Escribir "El precio final por kilo de banano es:", precioInicial

// Seupdocodigo:
// Algoritmo calcularPrecioFinal
//    Declarar precioInicial como número
//    Declarar tipo como cadena
//    Declarar tamaño como número
//    Escribir "Ingrese el precio inicial por kilo de banano:"
//    Leer precioInicial
//    Escribir "Ingrese el tipo de banano (A o B):"
//    Leer tipo
//    Escribir "Ingrese el tamaño del banano (1 o 2):"
//    Leer tamaño
//    Si tipo es "A" hacer
//       Si tamaño es 1 hacer
//          Aumentar precioInicial + $2
//       Si no
//          Aumentar precioInicial + $3
//    Si no
//       Si tamaño es 1 hacer
//          Disminuir precioInicial - $3
//       Si no
//          Disminuir precioInicial - $5
//    Escribir "El precio final por kilo de banano es:", precioInicial
// FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log;

function calcularPrecioFinal() {
   write("Ingrese el precio inicial por kilo de banano:");
   let precioInicial = parseFloat(read());

   write("Ingrese el tipo de banano (A o B):");
   let tipo = read().toUpperCase();

   write("Ingrese el tamaño del banano (1 o 2):");
   let tamaño = parseInt(read());

   if (tipo === "A") {
      if (tamaño === 1) {
         precioInicial += 2;
      } else {
         precioInicial += 3;
      }
   } else {
      if (tamaño === 1) {
         precioInicial -= 3;
      } else {
         precioInicial -= 5;
      }
   }

   write("El precio final por kilo de banano es:", precioInicial);
}

calcularPrecioFinal();