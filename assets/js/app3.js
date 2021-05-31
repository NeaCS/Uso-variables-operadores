// obtención de datos 

var celsius = parseInt(prompt("Ingrese los grados celsius"));

// formulas y procesos de conversión de temperatura

var kelvin = celsius + 273.15;
var farenheit = (celsius * 9/5) + 32;

// imprimir resultados

document.write("La temperatura en Kelvin es " + kelvin + "<br>")
document.write("La temperatura en farenheit es " + farenheit + "<br>")

