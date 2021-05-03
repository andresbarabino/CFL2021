let readlineSync = require('readline-sync');
console.log("Ingresar valores para determinar el numero maximo, el minimo y la media.");
console.log("Ingrese 0 para terminar.");
let numIngresado = readlineSync.questionInt("Ingrese un numero: ");
let maximo = numIngresado;
let minimo = numIngresado;
let contador = 0;
let suma = 0;

while(numIngresado != 0){
    if(numIngresado > maximo){
        maximo = numIngresado;
    }
    else{
        if(numIngresado < minimo){
            minimo = numIngresado;
        }
    }
    suma += numIngresado;
    contador++;
    numIngresado = readlineSync.questionInt("Ingrese un numero: ");
}

console.log("El numero mayor es: " + maximo + "--- El menor es: " + minimo + "--- Y el promedio: " + suma/contador);