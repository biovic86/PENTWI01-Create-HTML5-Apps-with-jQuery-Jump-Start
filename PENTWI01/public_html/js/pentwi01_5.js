$(document).ready(function(){
   $("#testAjaxB").click(function(){
      $("#testAjax1").load("../resources/ajax_test.txt");
   });
   
   $("#testAjaxB2").click(function(){
      $("#testAjax2").load("../resources/ajax_test.txt #parrafo");
   });
   
   $("#testAjaxB3").click(function(){
      $("#testAjax3").load("../resources/ajax_test.txt", function(responseTxt, statusTxt, xhr){
          if(statusTxt == "success"){
              alert("El contenido fue cargado exitosamente");
          }
          if(statusTxt == "error"){
              alert("Error!!!! " + xhr.status + ": " +xhr.statusText);
          }
      });
   });
   
   $("#testAjaxB4").click(function(){
       $.get("../resources/ajax_test.txt", function(datos,estatus){
           alert("Datos: " + datos + "\nEstatus: " + estatus);
       });
   });
});