'use strict'

// Funciones anonimas
// Es una función que no tiene nombre

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5, 7, dato => {
	console.log("La suma es:", dato);
},
function(dato){
	console.log("La suma por dos es:", (dato*2));
});

