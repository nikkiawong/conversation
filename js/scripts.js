var fidoImg = new Image();
fidoImg.src = "img/fido.jpg"

var jQueryObject = $(document);

jQueryObject.ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>MEOW!</li>");
    $("ul#dog").prepend("<li>WOOF!</li>");
  });

  $("button#woof").click(function() {
    $("ul#dog").prepend("<li>WOOF!</li>");
    $("ul#cat").prepend("<li>MEOW!</li>");
  });

  $("button#fidobtn").click(function() {
    $("button#fidobtn").after(fidoImg);
  });

  $("button#hideFidoBtn").click(function() {
    $(fidoImg).remove();
  });
});
