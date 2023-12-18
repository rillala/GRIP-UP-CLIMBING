// 文件載入
document.addEventListener("DOMContentLoaded", function () {
  showBranch();
  shortenTicketType();
});

// 視窗變更尺寸
$(window).resize(function () {
  shortenTicketType();
});

//------------------以下為功能--------------------//
// 依照 select option 顯示分店資訊
function showBranch() {
  $("#branches-link").change(function () {
    let selectBranch = $(this).val();
    let branchID = `#${selectBranch}-branch`;

    $(".center-list .center").not($(branchID)).hide();

    $(branchID).show();

    let mapID = `#${selectBranch}-map`;
    $("#map-list .googleMap").not($(mapID)).hide();
    $(mapID).show();

    //當大裝置的時候,把地圖移位子
  });
}

function shortenTicketType() {
  let small = ["(N)", "(C)", "(M)"];
  let big = ["Normal", "Concession", "Member"];

  // 獲取所有的td元素
  let tdElements = $(".ticket-price thead td");

  if (window.innerWidth < 600) {
    for (let i = 0; i < tdElements.length; i++) {
      // 使用.eq(i)來選擇當前索引的td元素，並獲取其文本內容
      tdElements.eq(i + 1).text(`${small[i]}`);
    }
  } else {
    tdElements.eq(i + 1).text(`${big[i]}`);
  }
}

document.querySelectorAll(".ticket-price td").forEach((td) => {
  td.addEventListener("click", function () {
    const aHover = this.querySelector("a.hover");
    if (aHover) {
      aHover.classList.add("active-hover");
      setTimeout(() => {
        aHover.classList.remove("active-hover");
      }, 1000); // 1000 毫秒後移除效果
    }
  });
});
