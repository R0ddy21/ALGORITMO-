//16. Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:sueldoMensual=0(leer),sueldoAnual=0(calcular),sueldoNeto=0(calcular),excedente=0(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso:   sueldoAnual=sueldoMensual*12
//            si (sueldoAnual>=30000)
//            escribir"se le aplica un impuesto del 15% al excedente"
//            excedente=sueldoAnual-30000
//            sueldoNeto=30000 +(excedente*0.15)
//            escribir"El sueldo del trabajador","$",sueldoNeto
//         sino
//            escribir"El sueldo del trabajador","$",sueldoAnual
// La informacion de las variables procesadas
// Salida:escribir"el sueldo del trabajador"

// Seupdocodigo:

// Algoritmo unir
//  declarar  sueldoMensual=0,sueldoAnual=0,sueldoNeto=0,excedente=0
// escribir"Ingrese el sueldo mensual del trabajador"
// leer sueldoMensual
//           sueldoAnual=sueldoMensual*12
//            si (sueldoAnual>=30000)
//            escribir"se le aplica un impuesto del 15% al excedente"
//            excedente=sueldoAnual-30000
//            sueldoNeto=30000 +(excedente*0.15)
//            escribir"El sueldo del trabajador","$",sueldoNeto
//         sino
//            escribir"El sueldo del trabajador","$",sueldoAnual
//FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log

function trabajo(){
let sueldoMensual=0,sueldoAnual=0,sueldoNeto=0,excedente=0
write("Ingrese el sueldo mensual del trabajador")
sueldoMensual=parseInt(read())
sueldoAnual=sueldoMensual*12
if (sueldoAnual>=30000){
   write("se le aplica un impuesto del 15% al excedente")
   excedente=sueldoAnual-30000
   sueldoNeto=30000 +(excedente*0.15)
   write("El sueldo del trabajador","$",sueldoNeto)
}
else{
    write("El sueldo del trabajador","$",sueldoAnual)
}
}
//se le llama o se ejecuta la funcion
trabajo()


