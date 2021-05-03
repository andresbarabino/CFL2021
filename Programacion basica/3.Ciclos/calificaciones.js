let readlineSync = require('readline-sync');
console.log("Programa de calificaciones. (oprima enter para salir)");
let nombreAlumno = readlineSync.question("Ingrese el nombre de un alumno: ");
let primerNota, segundaNota, tercerNota, notaFinal;

while(nombreAlumno != ""){
    primerNota = readlineSync.questionInt("Ingrese la nota de practicas(1): ");
    segundaNota = readlineSync.questionInt("Ingrese la nota de problemas(2): ");
    tercerNota = readlineSync.questionInt("Ingrese la nota de teoria(3): ");
    if((primerNota >= 0 && primerNota <= 10) && (segundaNota >= 0 && segundaNota <= 10) && (tercerNota >= 0 && tercerNota <= 10)){
        notaFinal = (primerNota*0.1)+(segundaNota*0.5)+(tercerNota*0.4);
        console.log("La nota final de " + nombreAlumno + " es: " + notaFinal);
    
    }else{
        console.log("Error, los valores deben ser del 0 al 10.");
    }
    nombreAlumno = readlineSync.question("Ingrese el nombre de un alumno: ");

}