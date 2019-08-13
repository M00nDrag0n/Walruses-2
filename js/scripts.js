$(document).ready(function() {
  $(".clickable").click(function() {
    $(".visible").toggle();
    $(".invisible").toggle();
    $(".invisible-2").toggle();
  });
});
