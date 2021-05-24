let readlineSync = require('readline-sync');

let curso = readlineSync.questionInt("Ingrese la capacidad del curso: ");
let aulaAzul = 40;
let aulaVerde = 35;
let aulaAmarilla = 30;

if(curso <= aulaAmarilla){
    console.log(`El curso ingresado es asignado al aula Amarilla.`);
}
else{
    if(curso <= aulaVerde){
        console.log("El curso ingresado es asignado al aula Verde.");
    }
    else{
        if(curso <= aulaAzul){
            console.log("El curso ingresado es asignado al aula Azul.");
        }
        else{
            console.log("El curso ingresado supera las capacidades de las aulas del jardin.");
        }
    }
}