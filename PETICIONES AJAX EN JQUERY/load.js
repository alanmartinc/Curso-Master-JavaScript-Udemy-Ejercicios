'use strict'

$(document).ready(function(){
    // Load
    // $("#datos").load("https://reqres.in/");

    // Get y Post
    $.get("https://reqres.in/api/users", {page: 3}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+ " " +element.last_name+"</p>");
        });
    });

    $("#formulario").submit(function(e){
        e.preventDefault();

        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        /*
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        });
        */

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("A ocurrido un error");
            },
            timeout: 2000
        });

        return false;
    });
});



