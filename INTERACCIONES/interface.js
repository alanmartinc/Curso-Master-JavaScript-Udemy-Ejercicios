$(document).ready(function(){
    
    // Mover elemento por la página
    $(".elemento").draggable();

    // Redimensionar
    $(".elemento").resizable();

    // Seleccionar y ordenar elementos
    // $(".lista-seleccionable").selectable();
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista");
        }
    });

    // Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro de el area");
        }
    });
});