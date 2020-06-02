'use strict'

var pais = "Argentina";
var continente = "America Del Sur";
var pais_y_continente = pais + ' ' + continente;

console.log(pais, continente);
alert(pais_y_continente);

// Var
var numero = 40; 
console.log(numero); // Valor 40

if(true){
	var numero = 50;
	console.log(numero); // Valor 50
}

console.log(numero); // Valor 50

// Let
var texto = "Curso JS Victor Robles WEB";
console.log(texto); // Valor js

if(true){
	let texto = "Curso Laravel 5 Victor Robles WEB";
	console.log(texto); // Valor laravel 5
}

console.log(texto); // Valor js

// Constantes
var web = "https://www.google.com.ar/";
const ip = "192.88.0.12";

web = "https://www.youtube.com/";
console.log(web, ip);