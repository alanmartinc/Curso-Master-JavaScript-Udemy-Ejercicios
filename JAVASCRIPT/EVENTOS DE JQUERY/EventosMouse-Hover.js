'use strict'

$(document).ready(function(){
	// MouseOver y MouseOut
	var caja = $("#caja");

	caja.mouseover(function(){
		$(this).css("background","red");
	});

	caja.mouseout(function(){
		$(this).css("background","green");
	});
});



