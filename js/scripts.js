$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>MEOW!</li>");
    $("ul#dog").prepend("<li>WOOF!</li>");
  });

  $("button#woof").click(function() {
    $("ul#dog").prepend("<li>WOOF!</li>");
    $("ul#cat").prepend("<li>MEOW!</li>");
  });
});
