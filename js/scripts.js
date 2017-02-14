$(function() {
  $(".flashcard").click(function() {
    $("body").removeClass();
    $(".initially-hidden").slideToggle();
  });
  $(".flashcard2").click(function() {
    $("body").removeClass();
    $(".initially-hidden2").slideToggle();
  });
});
