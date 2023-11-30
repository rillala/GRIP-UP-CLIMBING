document.querySelectorAll(".type.btn-light.h5").forEach((button) => {
  button.addEventListener("click", function () {
    let current = document.getElementById("qa-link");

    let clickText = current.innerHTML;

    // 將 #qa-link 的文字設置為當前按鈕的文字
    current.innerHTML = this.innerHTML;

    // 將按鈕的文字設置為原本 #qa-link 的文字
    this.innerHTML = clickText;
  });
});

//QA替換要做data array? 問答數不一怎麼處理?
