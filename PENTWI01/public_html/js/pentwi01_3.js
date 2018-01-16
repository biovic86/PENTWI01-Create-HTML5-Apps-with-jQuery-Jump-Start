$("#ejercicio3 td").on('click', function () {
    //alert("El texto de la celda es:" + $(this).text());
    console.log("El texto de la celda es:" + $(this).text());
});

$("#activar").click(function () {
    $("#ejercicio3 td").on('click', function () {
        console.log("El texto de la celda es:" + $(this).text());
    });
    console.log("********Se han activado los eventos********");
});

$("#desactivar").on('click', function () {
    $("#ejercicio3 *").off('click');
    console.log("********Se han desactivado los eventos********");
});

$("#limpiarConsola").on("click", function () {
    console.clear();
});

$("#disparadores button:first").click(function(){
    actualizar($("#disparadores span:first"));
});

$("#disparadores button:nth-child(2)").click(function(){
    $("#disparadores input").trigger("select");
    $("#disparadores button:first").trigger("click");
});

$("#disparadores input").select(function(){
    actualizar($("#disparadores span:last"));
});

function actualizar(x){
 var n = parseInt(x.text(), 10);
 x.text(n + 1);
}

$(document).mousemove(function(mv){
    mouseX = mv.pageX;
    mouseY = mv.pageY;;
    $("#mousemove span:first").text(mouseX);
    $("#mousemove span:last").text(mouseY);
}).mouseover();

$("#ejercicio3a tr").on('click',function(ev){
   console.clear();
   ht = $(this).html();
   arreglo = convertirArreglo(ht);
   console.group("Asignacion de maquina");
   console.log("Número de equipo --> " + arreglo[0]);
   console.log("Marca --> " + arreglo[1]);
   console.log("Modelo --> " + arreglo[2]);
   console.log("Fecha de asignación --> " + arreglo[3]);
   console.log("Responsable --> " + arreglo[4]);
   console.log("tipo evento --> " + ev.type);
   console.log("objetivo --> " + ev.target);
   console.log("timestamp --> " + ev.timeStamp);
   console.log("datos --> " + ev.data);
   console.groupEnd();
   ev.stopPropagation();
});

//.not("#ejercicio3a th")
function convertirArreglo(s){
    var datos = [];
    palabra = $.trim(s);
    spl = palabra.split('\n');
    j = 0;
    for(i = 0; i < spl.length; i++){
        if ((spl[i].indexOf("<td>") === -1) && (spl[i].indexOf("</td>") === -1)){
            if((spl[i].indexOf("<th>")) > -1 || (spl[i].indexOf("</th>") > -1)){
                throw "Error elegiste un encabezado!!!!!!!!";
            }
            datos[j] = $.trim(spl[i]);
            j++;
        }
    }
    return datos;
}

$(window).on('resize',function(ev){
    console.log("reajustando tamaño de pantalla a " + window.outerWidth + 'x' + window.outerHeight);
});

$(window).on('load',function(){
    var d = new Date();
    $("#carga").text("Hora de carga " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
});

$(function(){
    var d = new Date();
    $("#listo").text("Hora de completado " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
});