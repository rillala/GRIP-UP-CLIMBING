// 購買數量按鈕增減
const buyNumber = document.getElementById("buy-number");

document.getElementById("plus").addEventListener("click", function () {
  buyNumber.value++;
});

document.getElementById("minus").addEventListener("click", function () {
  if (buyNumber.value > 1) buyNumber.value--;
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
