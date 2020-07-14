'use strict'

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

for(var i=0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

document.write("</ul>");