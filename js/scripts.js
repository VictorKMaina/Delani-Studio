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
  $("#contact form").submit(function (event) {
    // event.preventDefault();
    var userName = $("input#username").val();
    var userEmail = $("input#email").val();
    var message = $("input#message").val();
    // var url = "https://us4.api.mailchimp.com/3.0/lists/03ca874a3b/";
    alert("Hey, " + userName + ". We got your message. Thanks for reaching out to us.");
    $("#contact form").reset();
    // $.post(url, { "username": "Victor", "email": "123@gmail.com", "apikey": "90c6212c5f012b1e27899206be68f22b-us4" }, function () {
    //   alert("Thanks.")
    // })
  })
})

// 90c6212c5f012b1e27899206be68f22b-us4 API Key
// 03ca874a3b Audience ID