let dias;

do {
     dias = parseInt(prompt("Ingrese la cantidad de días"));
} while (dias < 0); {
    var años = Math.floor(dias/365);
    var semanas = Math.floor(dias/7);
    var restantes = Math.floor((dias % 365)%7);
}

    document.write("Son " + años + " años " + semanas + " semanas " + restantes + " dias");
