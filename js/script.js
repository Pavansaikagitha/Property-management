$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 200) {
        $(".scroll-top").fadeIn(500);
      } else {
        $(".scroll-top").fadeOut(500);
      }
    });
  
    $(".scroll-top").click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });
  


