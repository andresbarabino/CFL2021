let readlineSync = require('readline-sync');
console.log("Este programa encuentra el numero mayor de los ingresados.");
console.log("Escriba 0 para salir.");
let valoresIngresados = readlineSync.questionInt("Ingrese un numero: ");
let maximo = valoresIngresados;

while(valoresIngresados != 0){
    if(valoresIngresados > maximo){
        maximo = valoresIngresados;
    }
    valoresIngresados = readlineSync.questionInt("Ingrese un numero: ");
}
console.log("El numero maximo es: ", maximo);