'use strict'

$(document).ready(function(){
	$("#mostrar").hide();

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		$("#caja").fadeTo('slow', 1);
	});

	// hide, show, fadeIn, faceOut, slideDown, slideUp

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		$("#caja").fadeTo('slow', 0);
	});

	$("#todoenuno").click(function(){
		$("#caja").toggle('fast');
	});

	// fadeToggle, slideToggle
});




