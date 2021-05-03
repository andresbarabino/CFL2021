let readlineSync = require('readline-sync');
console.log("Este programa cuenta la cantidad de numeros positivos y el porcentaje respecto del total.");
console.log("Ingrese 0 para salir.");
let numeroIngresado = readlineSync.questionInt("Ingrese un numero: ");
let contador = 0;
let positivos = 0;
let resultado;

while(numeroIngresado != 0){
    if(numeroIngresado > 0){
        positivos++;
    }
    contador++;
    numeroIngresado = readlineSync.questionInt("Ingrese un numero: ");
}
resultado = (positivos*100)/contador;
console.log(positivos + " positivos. " + resultado + "%" + " del total");