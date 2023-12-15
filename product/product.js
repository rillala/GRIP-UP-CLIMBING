// 購買數量按鈕增減
const buyNumber = document.getElementById("buy-number");

document.getElementById("plus").addEventListener("click", function () {
  buyNumber.value++;
});

document.getElementById("minus").addEventListener("click", function () {
  if (buyNumber.value > 1) buyNumber.value--;
});

document.addEventListener("DOMContentLoaded", function () {
  changePic();
  ifSmallSize();
  productDetailShow();
});

$(document).resize(function () {
  changePic();
  ifSmallSize();
  productDetailShow();
});
//更換商品圖片
const currentPic = document.getElementById("showPic");

const scrollMinus = document.getElementById("scrollMinus");
const scrollAdd = document.getElementById("scrollAdd");

const picSrc = [
  "/product/product-1.png",
  "/product/product-2.png",
  "/product/product-3.png",
  "/product/product-4.png",
];

//判斷目前圖片順序,給予新的圖片src
function picPrevious() {
  let currentPicURL = new URL(currentPic.src);
  for (let i = 0; i < picSrc.length; i++) {
    if (currentPicURL.pathname.includes(picSrc[i]) && i !== 0) {
      currentPic.src = "." + picSrc[i - 1];
      break;
    }
  }
}

function picNext() {
  let currentPicURL = new URL(currentPic.src);
  for (let i = 0; i < picSrc.length; i++) {
    if (currentPicURL.pathname.includes(picSrc[i]) && i !== picSrc.length - 1) {
      currentPic.src = "." + picSrc[i + 1];
      break;
    }
  }
}

function changePic() {
  scrollMinus.addEventListener("click", picPrevious);
  scrollAdd.addEventListener("click", picNext);
}

function ifSmallSize() {
  if (window.innerWidth < 770) {
    $("#pic-small-area").append($("#product-pics"));
    $("#features-btn-toggle").append($("ul.tech"));
  } else {
    $(".item .wrap:first-child").prepend($("#product-pics"));
    $("#detail-middle").append($("ul.tech"));
  }
}

function productDetailShow() {
  if (window.innerWidth < 770) {
    $("#productDetail").click(function () {
      $("#productDetail-toggle").slideToggle();
      $(this).find(".qa-icon").toggleClass("rotate");
    });

    $("#features-btn").click(function () {
      $("#features-btn-toggle").slideToggle();
      $(this).find(".qa-icon").toggleClass("rotate");
    });

    $("#techSpec-btn").click(function () {
      $("#techSpec-btn-toggle").slideToggle();
      $(this).find(".qa-icon").toggleClass("rotate");
    });

    $("#care-btn").click(function () {
      $("#care-btn-toggle").slideToggle();
      $(this).find(".qa-icon").toggleClass("rotate");
    });
  }
}

////Related Products滑動效果
$(document).ready(function () {
  $(".related .wrap").each(function () {
    var container = $(this);
    var cardList = container.find("#related-roll");
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
});

//視窗變更尺寸的時候要處理的功能
$(window).resize(function () {});

// 為每個.container添加觸摸事件處理程序

function handleSwipe(cardList, startX, endX) {
  var containerWidth = cardList.parent().width();
  var position = cardList.data("position");

  // 將百分比位置轉換為像素
  var positionPx = (position / 100) * containerWidth;

  // 設置每次滑動改變的百分比及其對應的像素值
  var changePercentage = 100; // 100%
  var changePixels = 30; // 30px
  var change = (changePercentage / 100) * containerWidth + changePixels;

  // 設置最大滑動位置的百分比及其對應的像素值
  var maxPositionPercentage = -500; // -500%
  var maxPositionPixels = -150; // -150px
  var maxPosition =
    (maxPositionPercentage / 100) * containerWidth + maxPositionPixels;

  if (startX > endX) {
    // 向左滑動
    if (positionPx > maxPosition) {
      positionPx -= change;
    }
  } else {
    // 向右滑動
    if (positionPx < 0) {
      positionPx += change;
    }
  }

  // 將更新後的像素位置轉換回百分比
  var newPositionPercentage = (positionPx / containerWidth) * 100;

  cardList.css("left", newPositionPercentage + "%");
  cardList.data("position", newPositionPercentage);
}
