let readlineSync = require('readline-sync');

let dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let v1 = new Array(dimension);
let i, ceros = 0, positivos = 0, negativos = 0;

for(i = 0; i < dimension; i++){
    v1[i] = readlineSync.questionInt("Ingrese un numero para la posicion " + i + ": ");
}

for(i = 0; i < dimension; i++){
    if(v1[i] == 0){
        ceros++;
    }else if(v1[i] > 0){
        positivos++;
    }else{
        negativos++;
    }
}
console.log("Resultado: " + positivos + " positivos, " + negativos + " negativos y " + ceros + " ceros.");
