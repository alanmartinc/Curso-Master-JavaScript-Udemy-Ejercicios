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
});