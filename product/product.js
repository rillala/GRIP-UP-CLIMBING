// 購買數量按鈕增減
const buyNumber = document.getElementById("item-number");

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
  "/product/product%20(1).png",
  "/product/product%20(2).png",
  "/product/product%20(3).png",
  "/product/product%20(4).png",
];

//判斷目前圖片順序,給予新的圖片src
function picPrevious() {
  let currentPicURL = new URL(currentPic.src);
  for (let i = 0; i < picSrc.length; i++) {
    if (currentPicURL.pathname.includes(picSrc[i]) && i !== 0) {
      currentPic.src = picSrc[i - 1];
      break;
    }
  }
}
function picNext() {
  let currentPicURL = new URL(currentPic.src);
  for (let i = 0; i < picSrc.length; i++) {
    if (currentPicURL.pathname.includes(picSrc[i]) && i !== picSrc.length - 1) {
      currentPic.src = picSrc[i + 1];
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
});
