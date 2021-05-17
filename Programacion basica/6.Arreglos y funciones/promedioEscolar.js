let readlineSync = require('readline-sync');

let cantidadAlumnos = readlineSync.questionInt("Ingrese la cantidad de alumnos: ");
let nota1T = new Array(cantidadAlumnos);
let nota2T = new Array(cantidadAlumnos);
let nota3T = new Array(cantidadAlumnos);
let alumnosIngresados = new Array(cantidadAlumnos);
let buscarAlumno;
let resultado = 0;
while(cantidadAlumnos <= 0){
    cantidadAlumnos = readlineSync.questionInt("Ingrese la cantidad de alumnos: ");

}
function cargarAlumnosNotas(alumno, nota1, nota2, nota3, longitud){
    for(let i = 0; i < longitud; i++){
        alumno[i] = readlineSync.question("Ingrese el nombre del alumno "+(i+1)+": ");
        nota1[i] = readlineSync.questionInt("Ingrese la nota del 1er trimestre: ");
        nota2[i] = readlineSync.questionInt("Ingrese la nota del 2do trimestre: ");
        nota3[i] = readlineSync.questionInt("Ingrese la nota del 3er trimestre: ");
    }
}

function calcularPromedio(alumnoBuscado, nota1, nota2, nota3, longitud, alumno){
    for(let i = 0; i < longitud; i++){
        if(alumnoBuscado == alumno[i]){
            resultado = nota1[i] + nota2[i] + nota3[i];
        }
    }
    return resultado/3;
}

function esAlumno(alumnoBuscado, alumno, longitud){
    for(let i = 0; i < longitud; i++){
        if(alumnoBuscado == alumno[i]){
            return true;
        }
    }
    return false;
}

cargarAlumnosNotas(alumnosIngresados, nota1T, nota2T, nota3T, cantidadAlumnos);
buscarAlumno = readlineSync.question("Ingrese un alumno para calcular su promedio (Enter para salir): ");
while(buscarAlumno != ""){
    if(esAlumno(buscarAlumno, alumnosIngresados, cantidadAlumnos) == true){
        console.log("El promedio de "+buscarAlumno+" es: "+calcularPromedio(buscarAlumno, nota1T, nota2T, nota3T, cantidadAlumnos, alumnosIngresados));
    }
    else{
        console.log("El nombre ingresado no se encuentra.");
    }
    buscarAlumno = readlineSync.question("Ingrese un alumno para calcular su promedio (Enter para salir): ");

}