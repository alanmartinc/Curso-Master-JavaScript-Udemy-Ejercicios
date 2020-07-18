'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

var indice = peliculas.indexOf('Gran torino');

if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);