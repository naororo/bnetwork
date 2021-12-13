$(function () {
  $(window).scroll(function () {
    var y = $(this).scrollTop();
    $("#scroll").css("background-position", "134px" + parseInt(-y / 2) + "px");
  });
});

// ハンバーガーメニュー
$(".header__hamburger-menu").click(function () {
  $(this).toggleClass("active");
});

$(".header__hamburger-menu").on("click", function () {
  $(".header__hamburger-menu").toggleClass("close");
  $(".nav-wrapper").fadeToggle(500);
  $("body").toggleClass("noscroll");
});

// フェードイン
// スクロールして表示領域に入ったらclass付与
$(function () {
    $(".js-fadeUp").on("inview", function () {
      $(this).addClass("is-inview");
    });
  });

$(function () {
    $(".js-fadeUp--voice").on("inview", function () {
      $(this).addClass("is-inview");
    });
  });

$(function () {
    $(".js-fadeIn").on("inview", function () {
      $(this).addClass("is-inview");
    });
  });