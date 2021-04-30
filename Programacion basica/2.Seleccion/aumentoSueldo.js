let readlineSync = require('readline-sync');

let salarioIngresado = readlineSync.questionInt("Ingrese su salario: ");

if(salarioIngresado <= 15000){
    console.log(`Usted tiene un aumento del 20%, su salario actual es de: ${(salarioIngresado*0.20) + (salarioIngresado)} `);
}else{
    if(salarioIngresado <= 20000){
        console.log(`Usted tiene un aumento del 15%, su salario actual es de: ${(salarioIngresado*0.15) + (salarioIngresado)} `);
    }else{
        if(salarioIngresado <= 25000){
            console.log(`Usted tiene un aumento del 5%, su salario actual es de: ${(salarioIngresado*0.05) + (salarioIngresado)}`);
        }else{
            console.log(`Usted no tiene aumento, su salario es el mismo: ${(salarioIngresado)}`);
        }
    }
}