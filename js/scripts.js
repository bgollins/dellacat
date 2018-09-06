$(document).ready(function() {
  $("#fade").fadeIn("slow", function() {

  });

  $("button#green").click(function() {
      $("body").addClass("green-background");
      $("body").addClass("white-text");
  });

  $("button#back").click(function() {
    $("body").removeClass();
    $("#border").removeClass();
  });

  $("#border").click(function() {
    $("#border").addClass("border");
  });

  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    
  });


});
