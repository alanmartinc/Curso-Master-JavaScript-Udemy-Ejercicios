'use strict'

// Condicional IF
var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
	console.log("edad uno es mayor que edad dos");
} else {
	console.log("La edad uno es inferior");
}

var edad = 18;
var nombre = "Alan";

if(edad >= 18){
	console.log(nombre + " Tiene " + edad + " años, es mayor de edad");
} else {
	console.log(nombre + " Tiene " + edad + " años, es menor de edad");
}

// Operadores logicos
var year = 2028;

if (year != 2019){
	console.log("El año no es 2019, realmente es: " + year);
}

if (year >= 2000 && year <= 2020){
	console.log("Estamos en la era actual");
} else {
	console.log("Estamos en la era post moderna");
}

if (year == 2008 || (year >= 2018 && year == 2028)){
	console.log("El año acaba en 8");
} else {
	console.log("Año no registrado");
}

// Switch
var edad = 18;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Acabas de cumplir la mayoria de edad";
	break;
	case 25:
		imprime = "Ya eres un adulto";
	break;
	case 40:
		imprime = "Crisis de los cuarenta";
	break;
	case 75:
		imprime = "Eres ya un anciano";
	break;
	default:
		imprime = "Tu edad es neutra";
	break;
}

console.log(imprime);