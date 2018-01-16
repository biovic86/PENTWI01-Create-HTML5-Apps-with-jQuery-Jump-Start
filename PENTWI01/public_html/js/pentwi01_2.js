$(document).ready(function(){
   $("#modTexto").click(function(){
       $("p:not('#linkTest')").text('Este es un ejemplo de manipulacion del DOM');
   });
   $("#addLink").click(function(){
      $("#linkTest").html('<a href="http://www.google.com" target="_blank">El texto ha evolucionado para convertirse en un Link!!!</a>');
   });
   $("#attrTest").click(function(){
      $("#divAttrTest").css({"background":"blue", "width": "100%"});
      $("#divAttrTest table").css("color", "white");
      $("#divAttrTest td:nth-child(2)").css("color", "red");
   });
   $("#appendTest").click(function(){
      $("#divAttrTest tbody").append("<tr><td>XYZ555</td><td>DELL</td><td>LATITUDE Test</td><td>01/01/2018</td><td>Elemento extra</td></tr>");
   });
   $("#clonarTest").click(function(){
      $("#divAttrTest").clone().appendTo("#cloneTest"); 
   });
   $("#modificarId").click(function(){
      $("#cloneTest #divAttrTest").removeAttr("id");
      $("#cloneTest table").attr("class","tablaClon");
   });
   $("#newStyle").click(function(){
      $("#cloneTest td").css({"border":"dotted","border-color":"green","text-align":"center"});
      $("#cloneTest table").css("background","yellow");
      $("#cloneTest").css({"position" : "absolute","left":"500px"});
   });
   
   $("#pos").click(function(){
       var x = $("#cloneTest").position();
       alert("Top: " + x.top + "\nLeft: " + x.left);
   });
});

