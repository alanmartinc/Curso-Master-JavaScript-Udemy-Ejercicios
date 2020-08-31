'use strict'

$(document).ready(function(){
	// MouseOver y MouseOut
	var caja = $("#caja");

	/*
	caja.mouseover(function(){
		$(this).css("background","red");
	});

	caja.mouseout(function(){
		$(this).css("background","green");
	});
	*/

	// Hover

	function cambiaRojo(){
		$(this).css("background","red");
	}

	function cambiaVerde(){
		$(this).css("background","green");
	}

	caja.hover(cambiaRojo, cambiaVerde);

	// Click, Doble click
	caja.click(function(){
		$(this).css("background","blue")
			   .css("color","white");
	});

	caja.dblclick(function(){
		$(this).css("background","pink")
			   .css("color","yellow");
	});

	// Focus y blur
	var nombre = $("#nombre");

	nombre.focus(function(){
		$(this).css("border","2px solid green");
	});

	nombre.blur(function(){
		$(this).css("border","1px solid #ccc");

		$("#datos").text($(this).val()).show();
	});
});



