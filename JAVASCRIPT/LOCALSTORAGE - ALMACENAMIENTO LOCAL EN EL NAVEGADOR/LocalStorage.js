'use strict'

// Comprobar disponibilidad del localstorage
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
} else {
    console.log("Incompatible con Localstorage");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony de Victor Robles");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
    nombre: "Victor Robles",
    email: "victor@victor.com",
    web: "victorroblesweb.es"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(userjs.web + " - " + userjs.nombre);

// Borrar memoria
localStorage.removeItem("usuario");

// Vaciar localstorage
localStorage.clear();