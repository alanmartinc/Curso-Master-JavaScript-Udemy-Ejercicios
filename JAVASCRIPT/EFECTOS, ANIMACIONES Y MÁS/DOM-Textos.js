'use strict'

$(document).ready(function(){
	reloadLinks();

	$('#add_button')
	.removeAttr('disabled')
	.click(function(){
		$('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');
		// prepend, before, after

		$("#add_link").val('');
		reloadLinks();
	});
});

function reloadLinks(){
	$('a').each(function(index){
		var that = $(this);
		var enlace = $(this).attr("href");

		that.attr('target','_blank');

		that.text(enlace);
	});
}



