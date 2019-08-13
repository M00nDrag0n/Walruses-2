$(document).ready(function() {
  $(".clickable").click(function() {
    $(".visible").fadeIn();
    $(".invisible").fadeIn();
    $(".invisible-2").fadeIn();
  });
});
