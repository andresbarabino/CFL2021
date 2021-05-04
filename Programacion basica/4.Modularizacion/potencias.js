let readlineSync = require('readline-sync');

let baseIng = readlineSync.questionInt("Ingrese el numero base: ");
let exponenteIng = readlineSync.questionInt("Ingrese el numero exponente: ");
let resultado;
while(exponenteIng < 0){
    console.log("El exponente debe ser mayor o igual a 0.");
    exponenteIng = readlineSync.questionInt("Ingrese el numero exponente: ");
}

function potencia(base, exponente){
    let resultado = 1; 
    if(exponente != 0){
        for(let i = 0; i < exponente; i++){
            resultado *= base; 
        }
    }else{
        resultado = 1;
    }
    return resultado;
}
resultado = potencia(baseIng, exponenteIng);
console.log(baseIng + " elevado al " + exponenteIng + " es: " + resultado);