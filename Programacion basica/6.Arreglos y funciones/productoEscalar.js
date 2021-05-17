let readlineSync = require('readline-sync');

let cantidad = readlineSync.questionInt("Ingrese la cantidad de numeros: ");
let v1 = new Array(cantidad);
let v2 = new Array(cantidad);
let producto = 0;
let i;

function cargarVectores(longitud){
    for(i = 0; i < longitud; i++){
        v1[i] = readlineSync.questionInt("Vector 1. Ingrese un valor para la posicion " + i + " : ");
        v2[i] = readlineSync.questionInt("Vector 2. Ingrese un valor para la posicion " + i + " : ");
    }
}

function calcularProducto(longitud){
    for(i = 0; i < longitud; i++){
        producto += v1[i] * v2[i];
    }
    return producto;
}

cargarVectores(cantidad);
console.log(v1);
console.log(v2);
console.log("El producto del vector 1 y vector 2 es: ", calcularProducto(cantidad) );