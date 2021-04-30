let readlineSync = require('readline-sync');

let numeroIngresado = readlineSync.questionInt("Ingrese un numero para determinar si es par o impar: ");

while(numeroIngresado == 0){
    console.log("El valor ingresado es 0.");
    numeroIngresado = readlineSync.questionInt("Ingrese un numero: ")
}

if(numeroIngresado % 2 == 0){
    console.log(numeroIngresado, "es par.");
}else{
    console.log(numeroIngresado, "es impar.");
}