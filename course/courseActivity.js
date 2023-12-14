$(document).ready(function () {
  scrollPosition(handleSwipe(cardList, startX, endX));
});

$(window).resize(function () {
  scrollPosition();
});

// 為每個.container添加觸摸事件處理程序
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
