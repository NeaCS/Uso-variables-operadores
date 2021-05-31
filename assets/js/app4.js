// creación de la variable días 

let dias;

// Obtención de la cantidad de días y seguir preguntando si es menos que cero 
do {
     dias = parseInt(prompt("Ingrese la cantidad de días"));
} while (dias < 0); {
    // formulas
    var años = Math.floor(dias/365);
    var semanas = Math.floor(dias/7);
    var restantes = Math.floor((dias % 365)%7);
}

// mostrar datos
    document.write("Son " + años + " años " + semanas + " semanas " + restantes + " dias");
