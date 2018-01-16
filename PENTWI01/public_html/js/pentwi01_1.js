$(document).ready(function(){
    $("#ocultar").click(function(){
       $("#ejercicio1 td").hide();
    });
    $("#mostrar").click(function(){
       $("#ejercicio1 td").show();
    });
    $("#opares").click(function(){
       $("#ejercicio1 tr:odd").hide();
    });
    $("#mpares").click(function(){
       $("#ejercicio1 tr:odd").show();
    });
    $("#puntero").hover(function(){
       alert("haz pasado el puntero por encima de mi!!!!"); 
    });
});