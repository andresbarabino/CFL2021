let readlineSync = require('readline-sync');
console.log("Este programa determina si un numero es par o impar.");
let numeroIngresado = readlineSync.questionInt("Ingrese un numero: ");

if(numeroIngresado == 0){
    console.log("El numero ingresado es 0.");
}else{
    if(numeroIngresado % 2 == 0){
        console.log(numeroIngresado, "es par.");
    }else{
        console.log(numeroIngresado, "es impar.");
    }
}