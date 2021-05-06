let readlineSync = require('readline-sync');

let vDimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let v1 = new Array(vDimension);
let i;

for(i = 0; i < vDimension; i++){
    v1[i] = readlineSync.questionInt("Ingrese el valor para la posicion " + i + ": "); 
}

for(i = vDimension -1; i >= 0; i--){
    console.log(v1[i]);
}