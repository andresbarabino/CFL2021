function esMultiplo(primero, segundo){
    if(primero % segundo == 0){
        return true;
    }else{
        return false;
    }
}

function cantidadDeDivisores(numero){
    let resultado = 0;
    for(let i = 0; i <= numero; i++){
        if(esMultiplo(numero, i) == true){
            resultado++;
        }
    }
    return resultado;
}

console.log(cantidadDeDivisores(20));