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
});



