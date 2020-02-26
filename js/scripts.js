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
});
$().ready(function () {
  $(".portfolio-info").mouseenter(function () {
    $(this).fadeTo("fast", 1)
  })
  $(".portfolio-info").mouseleave(function () {
    $(this).fadeTo("fast", 0)
  })
})
$().ready(function () {
  $("#contact form").reset(function (event) {
    var userName = $("input#mce-MMERGE1").val();
    var userEmail = $("input#mce-EMAIL").val();
    alert("Hey, " + userName + "." + "We got your message. Thanks for reaching out to us.");
    // event.preventDefault();
    // return false;
  })
})