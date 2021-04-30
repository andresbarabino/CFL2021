let readlineSync = require('readline-sync');
console.log("Este programa cuenta los valores que hay entre dos numeros, incluyendolos.");
let primerNumero = readlineSync.questionInt("Ingrese el primer numero: ");
let segundoNumero = readlineSync.questionInt("Ingrese el segundo numero: ");
let resultado = 0;

if(primerNumero > segundoNumero){ //este if modifica los valores en caso de que 
    let auxiliar = primerNumero; //el primer numero sea mayor que el segundo
    primerNumero = segundoNumero;
    segundoNumero = auxiliar;
}

for(primerNumero; primerNumero <= segundoNumero; primerNumero++){
    resultado += primerNumero;
}
console.log(resultado);