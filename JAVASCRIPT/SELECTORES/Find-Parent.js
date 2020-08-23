'use strict'

$(document).ready(function() {
	// Selector de ID
	var rojo = $("#rojo").css("background","red")
						 .css("color","white");
	
	var amarillo = $("#amarillo").css("background","yellow")
								  .css("color","black");
	
	// Selectores de clases
	var mi_clase = $('.zebra').css("padding", "5px");

	$('.sin_borde').click(function(){
		$(this).addClass('zebra');
	});

	// Selectores de etiqueta
	var parrafos = $('p').css("cursor","pointer");

	parrafos.click(function(){
		var that = $(this);
		if(!that.hasClass('grande')){
			that.addClass('grande');
		} else {
			that.removeClass('grande');
		}
	});

	// Selectores de atributo
	$('[title="Google"]').css("background","#ccc");
	$('[title="Facebook"]').css("background","blue");

	// Otros
	$('p, a').addClass('margen-superior');

	var busqueda = $('#elemento2').parent().parent().find('.resaltado');
	console.log(busqueda);
});



