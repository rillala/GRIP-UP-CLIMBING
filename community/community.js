$(document).ready(function () {
  clickShowStep();
  clickAnimate();
});

$(window).resize(function () {
  clickShowStep();
});

let simulateClick;

function clickShowStep() {
  for (let i = 1; i < 5; i++) {
    $(`#step-btn-${i}`).click(function () {
      $(".step-btn-round").removeClass("clicked");
      $(this).addClass("clicked");

      $("li.step-wrap").removeClass("click");
      $(`#step-${i}`).addClass("click");
    });
  }
}

function clickAnimate() {
  let currentStep = 1;
  let totalSteps = 4;

  // 模擬按鈕點擊
  simulateClick = setInterval(function () {
    $(`#step-btn-${currentStep}`).click();
    currentStep = (currentStep % totalSteps) + 1;
  }, 2000); // 每1500毫秒觸發一次
}
