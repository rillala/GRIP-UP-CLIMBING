$(document).ready(function () {
  $(".container").each(function () {
    var container = $(this);
    var cardList = container.find(".card-list");
    var startX, endX;

    // 設置初始位置
    cardList.data("position", 0);

    container.on("touchstart", function (e) {
      startX = e.touches[0].clientX;
    });

    container.on("touchend", function (e) {
      endX = e.changedTouches[0].clientX;
      handleSwipe(cardList, startX, endX);
    });
  });

  // slogan position animate
  $(window).on("scroll", function () {
    var windowScrollTop = $(window).scrollTop();
    var sloganPosition = $("#slogan").offset().top;
    var windowHeight = $(window).height();

    if (windowScrollTop + windowHeight > sloganPosition) {
      $("#slogan span").each(function (index) {
        $(this)
          .delay(1000 * index)
          .animate({ left: "0" }, 1000);
      });
    }
  });
});

//視窗變更尺寸的時候要處理的功能
$(window).resize(function () {});

// 為每個.container添加觸摸事件處理程序

function handleSwipe(cardList, startX, endX) {
  var position = cardList.data("position");
  var maxPosition = -300; // 最大滑動位置
  var change = 100; // 每次滑動改變的百分比

  if (startX > endX) {
    // 向左滑動
    if (position > maxPosition) {
      position -= change;
    }
  } else {
    // 向右滑動
    if (position < 0) {
      position += change;
    }
  }

  cardList.css("left", position + "%");
  cardList.data("position", position);
}
