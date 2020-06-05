'use strict'

// Bucle FOR
var numero = 100;

for(var i = 0; i < numero; i++){
	console.log("Vamos por el numero: " + i);
	debugger;
}

// Bucle While
var year = 2018;

while(year <= 2051){
	console.log("Estamos en el año: " + year);
	year++;
}

// Bucle DO While
var years = 30;

do{
	alert("Solo cuando sea diferente a 20");
	years--;
} while(years > 25)