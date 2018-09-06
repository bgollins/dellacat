$(document).ready(function() {
  $("button#green").click(function() {
      $("body").addClass("green-background");
      $("body").addClass("white-text");
  });
  $("button#back").click(function() {
    $("body").removeClass();
  });
});
