"use strict";


$(document).ready(function(){ 
    $("#block").mousemove(
     
     function (pos) {  
     $("#floatingmes").show(); 
     $("#floatingmes").css('left',(pos.pageX+10)+'px').css('top',(pos.pageY+10)+'px'); 	
     }   
    
    ).mouseleave(function() {
     $("#floatingmes").hide();  

 }); 
 }); 
