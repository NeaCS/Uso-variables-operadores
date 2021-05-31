// obtención de datos 

var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));

// condociones  

if ((num1 != 0 && num1 > 0) && (num2 != 0 && num2 > 0)) {

    //procesos
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 + num2;
    var modulo = num1 % num2;  

    // imprimir resultados

    document.write("La suma es " +suma + "<br>");
    document.write("La resta es " +resta + "<br>");
    document.write("La multiplicación es " +multiplicacion + "<br>");
    document.write("La división es " +division + "<br>");
    document.write("El módulo es " +modulo + "<br>");
} 

// qué hacer si no se cumple la condición
else {
    document.write("<h1>Datos erróneos</h1>")
} 


