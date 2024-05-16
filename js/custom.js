$(document).ready(function () {
  $(".clicktotop").hide();
  $(window).scroll(function () {
    var h = $(window).scrollTop();
    if (h > 200) {
      $(".c1").addClass("fixed-header");
      $(".clictotop").fadeIn(400);
    } else {
      $(".c1").removeClass("fixed-header");
      $(".clictotop").fadeOut(400);
    }
  });

  $(".to_top").hide();
  $(window).scroll(function () {
    h = $(window).scrollTop();
    if (h > 250) {
      $("header").addClass("top_fixed");
      $(".to_top").fadeIn(500);
    } else {
      $("header").removeClass("top_fixed");
      $(".to_top").fadeIn(500);
    }
  });
  $(".to_top").click(function () {
    $(window).scrollTop(0);
  });
});
