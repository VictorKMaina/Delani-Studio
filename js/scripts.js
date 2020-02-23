$().ready(function () {
  $("#design").click(function () {
    $("#design-1").toggle();
    $("#design-2").toggle();
  });
  $("#develop").click(function () {
    $("#develop-1").toggle();
    $("#develop-2").toggle();
  });
  $("#product").click(function () {
    $("#product-1").toggle();
    $("#product-2").toggle();
  });
  $(".col-lg-3").mouseenter(function () {
    $(".portfolio-info").fadeTo("fast", 1)
  })
  $(".col-lg-3").mouseleave(function () {
    $(".portfolio-info").fadeTo("fast", 0)
  })
})