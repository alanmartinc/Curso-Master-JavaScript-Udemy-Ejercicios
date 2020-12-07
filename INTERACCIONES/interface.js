$(document).ready(function(){
    
    // Mover elemento por la página
    $(".elemento").draggable();

    // Redimensionar
    $(".elemento").resizable();

    // Seleccionar elementos
    $(".lista-seleccionable").selectable();
});