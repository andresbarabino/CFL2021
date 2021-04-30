let readlineSync = require('readline-sync');

let numero1 = readlineSync.questionInt("Ingrese el numero que quiere multiplicar: ");
let numero2 = readlineSync.questionInt("Ingrese hasta que numero: ");
let i = 1;
for(i; i <= numero2; i++){
    let producto = numero1*i;
    console.log(numero1 + "*" + i + "=" + producto);
}