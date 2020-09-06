'use strict'

$(document).ready(function(){
	var caja = $("#caja");

	$("#mostrar").hide();

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		caja.slideDown('slow');
	});

	// hide, show, fadeIn, faceOut, slideDown, slideUp

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();

		caja.slideUp('slow', function(){
			console.log("Cartel ocultado");
		});
	});

	$("#todoenuno").click(function(){
		caja.toggle('fast');
	});

	// fadeToggle, slideToggle

	$("#animar").click(function(){
		caja.animate({
				marginLeft: '500px',
				fontSize: '40px',
				height: '100px',
			}, 'slow')
			.animate({
				borderRadius: '900px',
				marginTop: '80px',
			}, 'slow')
			.animate({
				borderRadius: '0px',
				marginLeft: '0px',
			}, 'slow')
			.animate({
				borderRadius: '900px',
				marginTop: '0px',
			}, 'slow')
			.animate({
				marginLeft: '500px',
				fontSize: '40px',
				height: '100px',
			}, 'slow');
	});
});




