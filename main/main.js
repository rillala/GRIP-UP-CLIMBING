//為每個news項目添加事件監聽器
document.addEventListener("DOMContentLoaded", function () {
  newsPicHover();
  changeNewsPicPosition();
});

function changeNewsPicPosition() {
  for (let i = 1; i <= 3; i++) {
    let targetID = "news" + i;
    let catchID = "news" + i + "-pic";

    if (window.innerWidth < 770) {
      // 當視窗寬度小於 768，移動 .up 到 #page-intro-small
      $(`#${targetID}`).append($(`#${catchID}`));
    } else {
      // 當視窗寬度大於或等於 768，將 .up 移回原來的位置
      $("#news-wrap").append($(`#${catchID}`));
    }
  }
  latestScroll();
}

function newsPicHover() {
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
}

function latestScroll() {
  $(window).scroll(function () {
    for (let i = 1; i <= 3; i++) {
      let targetID = "news" + i;
      let catchID = "news" + i + "-pic";

      let scrollPosition = $(window).scrollTop();
      let elementPosition = $(`#${targetID}`).offset().top - 400;

      // 检查是否滚动到了 #yourSpecialId

      if (scrollPosition >= elementPosition) {
        // 显示 #yourSpecialIdChild
        $(`#${targetID}`).find(`#${catchID}`).addClass("fadeIn");
      }
    }
  });
}
