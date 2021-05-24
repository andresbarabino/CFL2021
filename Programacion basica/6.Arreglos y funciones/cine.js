let readlineSync = require('readline-sync');
let cantidadButacas = readlineSync.questionInt("Ingrese la cantidad de butacas que hay en la sala: ");
let vButacas = new Array(cantidadButacas);
let indice;
let butacasOcupadas = 0;

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function completarArreglo(arreglo){
    for(indice = 0; indice < arreglo.length; indice++){
        arreglo[indice] = aleatorio(1, 3);
    }
}

function completarArregloBooleano(arreglo, ocupadas){
    for(indice = 0; indice < arreglo.length; indice++){
        if(arreglo[indice] == 1){
            arreglo[indice] = true;
            ocupadas++;
        }
        else{
            arreglo[indice] = false;
        }
    }
    return ocupadas;
}

completarArreglo(vButacas);
let disponibles = (cantidadButacas - completarArregloBooleano(vButacas, butacasOcupadas));
console.log("De las "+cantidadButacas+" butacas totales, hay "+disponibles+" lugares disponibles.");
console.log(vButacas);