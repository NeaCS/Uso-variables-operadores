// obtención de datos

var n1 = parseInt(prompt("Ingrese primer número"));
var n2 = parseInt(prompt("Ingrese segundo número"));
var n3 = parseInt(prompt("Ingrese tercer número"));
var n4 = parseInt(prompt("Ingrese cuarto número"));
var n5 = parseInt(prompt("Ingrese quinto número"));

// formulas para la suma y el promedio 

var suma = n1+n2+n3+n4+n5;
var promedio = suma/5;

//mostrar resultados

document.write("La suma de todos los números es " + suma + " y el promedio " + promedio);