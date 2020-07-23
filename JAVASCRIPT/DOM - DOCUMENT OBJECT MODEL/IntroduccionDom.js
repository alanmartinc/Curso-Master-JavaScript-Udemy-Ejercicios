'use strict'

function cambiaColor(color){
    caja.style.background = color;
}

var caja = document.querySelector("#caja");

caja.innerHTML = "Texto en la caja desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

console.log(caja);