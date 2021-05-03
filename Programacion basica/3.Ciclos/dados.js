let readlineSync = require('readline-sync');
console.log("Calcular probabilidad de sacar 6 con la cantidad de dados ingresados.");
let dados = readlineSync.questionInt("Ingrese la cantidad de dados: ");
let resultado = 6**dados;
console.log("La probabilidad de sacar 6 en " + dados + " dados es de " + "1/" + resultado);