$(document).ready(function () {
  $("img").each(function () {
    capt = $(this).attr("alt");
    src = $(this).attr("src");
    if (typeof capt !== typeof undefined && capt !== false) {
      istrump = capt.toLowerCase().includes("trump");
    }
    if (src.toLowerCase().includes("trump")) {
      istrump = true;
    }
    if (istrump) {
      width = this.clientWidth;
      d = new Date();
      catpic = "https://cataas.com/cat?width=" + width + "&d=" + d.getTime();
      $(this).attr("src", catpic);
    }
    if (istrump && $(this).parents("picture").length > 0) {
      $(this)
        .parents("picture")
        .children("source")
        .each(function () {
          $(this).attr("srcset", catpic);
        });
    }
  });
});
