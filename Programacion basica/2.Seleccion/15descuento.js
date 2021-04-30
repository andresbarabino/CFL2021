let readlineSync = require('readline-sync');

let precioUnitario = readlineSync.questionInt("Ingrese el precio del producto: ");
let cantidad = readlineSync.questionInt("Ingrese la cantidad: ");
let mes = readlineSync.questionInt("Ingrese el mes de su compra: ");
let total = precioUnitario*cantidad;
let descuento = total*0.15;

if(mes == 10){
    console.log(`Usted tiene descuento de 15% por comprar en octubre, su total a pagar es: ${total-descuento}`);
}else{
    console.log("Total a pagar: ", total);
}