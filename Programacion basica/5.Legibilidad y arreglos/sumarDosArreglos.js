let readlineSync = require('readline-sync');

let v1 = new Array(6);
let v2 = new Array(6);
let vSuma = new Array(6);
let i;

for(i = 0; i < 6; i++){
    v1[i] = readlineSync.questionInt("(Arreglo1) Ingrese un valor para la posicion " + i + ": ");
    v2[i] = readlineSync.questionInt("(Arreglo2) Ingrese un valor para la posicion " + i + ": ");
}

for(i = 0; i < 6; i++){
    vSuma[i] = v1[i] + v2[i]
    console.log("La suma en la posicion " + i + " es: " + vSuma[i]);
}