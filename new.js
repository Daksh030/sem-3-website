$(document).ready(function(){
     $("button").click(function(){
       $(".mid1").fadeToggle("slow");
     });
   });
   
   $(document).ready(function(){
     $(".btn1").mouseover(function(){
       $(".btn1").css("background-color", "#00B3FF");
     });
     $(".btn1").mouseout(function(){
       $(".btn1").css("background-color", "");
     });
   });