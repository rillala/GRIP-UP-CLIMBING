// 購買數量按鈕增減
const buyNumber = document.getElementById("item-number");

document.getElementById("plus").addEventListener("click", function () {
  buyNumber.value++;
});

document.getElementById("minus").addEventListener("click", function () {
  if (buyNumber.value > 1) buyNumber.value--;
});
