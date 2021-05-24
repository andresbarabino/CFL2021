let readlineSync = require('readline-sync');

let v1 = new Array(3);
let v2 = new Array(3);
let v3 = new Array(3);
let v4 = new Array(3);
let vResultado = new Array(3);
let indice;

function cargarArreglos(vector1, vector2, vector3, vector4){
    for(indice = 0; indice < 3; indice++){
        console.log("Vector 1");
        vector1[indice] = readlineSync.questionInt("Ingrese un numero en la posicion "+indice+": ");
        console.log("Vector 2");
        vector2[indice] = readlineSync.questionInt("Ingrese un numero en la posicion "+indice+": ");
        console.log("Vector 3");
        vector3[indice] = readlineSync.questionInt("Ingrese un numero en la posicion "+indice+": ");
        console.log("Vector 4");
        vector4[indice] = readlineSync.questionInt("Ingrese un numero en la posicion "+indice+": ");
    }
}

function multiplicarArreglo(vector1, vector2, vector3, vector4, vectorResultado){
    for(indice = 0; indice < 3; indice++){
        (vectorResultado[indice] = vector1[indice]*vector2[indice]*vector3[indice]*vector4[indice]);
    }
}

function mostrarArreglo(vector1, vector2, vector3, vector4, vectorResultado){
    for(indice = 0; indice < 3; indice++){
        console.log(`El resultado de ${vector1[indice]} * ${vector2[indice]} * ${vector3[indice]} * ${vector4[indice]} = ${vectorResultado[indice]}`);
    }
}

cargarArreglos(v1, v2, v3, v4);
multiplicarArreglo(v1, v2, v3, v4, vResultado);
mostrarArreglo(v1, v2, v3, v4, vResultado);