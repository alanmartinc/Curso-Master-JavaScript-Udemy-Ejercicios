$(document).ready(function(){
    
    // Mover elemento por la pagina
    $(".elemento").draggable();

    // Redimensionar 
    $(".elemento").resizable();

    // Seleccionar elementos
    $(".lista-seleccionable").selectable();
});