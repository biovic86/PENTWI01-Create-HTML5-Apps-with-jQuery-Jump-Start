$('#escondeEnc').click(function(){
   $('#efectosBasicos tr:first').toggle();
});

$('#fadEfect').click(function(){
   $('#desvanecer td:nth-child(even),#desvanecer th:nth-child(even)').fadeToggle();
});

$('#sldEfect').click(function(){
   $('#slidediv tr:nth-child(even)').slideToggle("slow");
});

$('#animar').click(function () {
   $('#cuadro').animate({
       left: '300px',
       width: '800px',
       opacity: '0.5'
   },5000);
});