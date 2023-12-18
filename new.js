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

   $(document).ready(function(){
    $('.my').slideDown(1200);
  });

  const sButton = document.getElementById("submit");
  sButton.addEventListener("click", function handleClick() {
    window.alert("You clicked me!");
  });

  $(document).ready(function(){
    $(".btn2").mouseover(function(){
      $(".btn2").css("background-color", "#33FF00");
    });
    $(".btn2").mouseout(function(){
      $(".btn2").css("background-color", "");
    });
  });

  $(document).ready(function(){
    $(".btn3").mouseover(function(){
      $(".btn3").css("background-color", "#33FF00");
    });
    $(".btn3").mouseout(function(){
      $(".btn3").css("background-color", "");
    });
  });
  