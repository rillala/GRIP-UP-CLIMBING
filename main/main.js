//為每個news項目添加事件監聽器
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 3; i++) {
    let currentNews = document.getElementById("news" + i);
    let newsPic = document
      .getElementById("news" + i + "-pic")
      .querySelector("img");

    // 對應的圖片增加和移除hover effect
    currentNews.addEventListener("mouseover", function () {
      newsPic.classList.add("img-hover");
    });

    currentNews.addEventListener("mouseout", function () {
      newsPic.classList.remove("img-hover");
    });
  }
});
