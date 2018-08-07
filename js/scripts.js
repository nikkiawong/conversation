// var fidoImg = new Image();
// fidoImg.src = "<img src=\"img/fido.jpg\">"

$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>MEOW!</li>");
    $("ul#dog").prepend("<li>WOOF!</li>");
  });

  $("button#woof").click(function() {
    $("ul#dog").prepend("<li>WOOF!</li>");
    $("ul#cat").prepend("<li>MEOW!</li>");
  });

  $("button#fidobtn").click(function() {
    $("button#fidobtn").after("<img src=\"img/fido.jpg\">");
  });

  // $("button#hideFidoBtn").click(function() {
  //   $("button#hideFidoBtn").remove("<img src=\"img/fido.jpg\">");
  // });
});
