// 18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
// El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
// Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva

// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: costoPorPersona=0, numeroPersonas=0
// Los calculos o procesos que se hacen con las variables
// proceso:  Si numeroPersonas es menor o igual a 100 hacer
//       Asignar costoPorPersona como $20.00
//    Sino, si numeroPersonas es mayor a 100 y menor o igual a 200 hacer
//       Asignar costoPorPersona como $15.00
//    Sino
//       Asignar costoPorPersona como $10.00
//    Calcular costoTotal multiplicando costoPorPersona por numeroPersonas
//    Calcular iva como 15% del costoTotal
//    Calcular presupuestoTotal sumando costoTotal y iva
// La informacion de las variables procesadas
// Salida: Escribir "El presupuesto total para el evento es:", presupuestoTotal

// Seupdocodigo:
// Algoritmo calcularPresupuesto
//    Declarar costoPorPersona como número
//    Declarar numeroPersonas como número
//    Escribir "Ingrese el número de personas para el evento:"
//    Leer numeroPersonas
//    Si numeroPersonas es menor o igual a 100 hacer
//       Asignar costoPorPersona como $20.00
//    Sino, si numeroPersonas es mayor a 100 y menor o igual a 200 hacer
//       Asignar costoPorPersona como $15.00
//    Sino
//       Asignar costoPorPersona como $10.00
//    Calcular costoTotal multiplicando costoPorPersona por numeroPersonas
//    Calcular iva como 15% del costoTotal
//    Calcular presupuestoTotal sumando costoTotal y iva
//    Escribir "El presupuesto total para el evento es:", presupuestoTotal
// FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log;

function calcularPresupuesto() {
   write("Ingrese el número de personas para el evento:");
   let numeroPersonas = parseInt(read());

   let costoPorPersona;

   if (numeroPersonas <= 100) {
      costoPorPersona = 20.00;
   } else if (numeroPersonas > 100 && numeroPersonas <= 200) {
      costoPorPersona = 15.00;
   } else {
      costoPorPersona = 10.00;
   }

   let costoTotal = costoPorPersona * numeroPersonas;
   let iva = costoTotal * 0.15;
   let presupuestoTotal = costoTotal + iva;

   write("El presupuesto total para el evento es:", presupuestoTotal.toFixed(2));
}

calcularPresupuesto();