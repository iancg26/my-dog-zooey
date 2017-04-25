$(document).ready(function() {
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  })

  $("button#lightgrey").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});
