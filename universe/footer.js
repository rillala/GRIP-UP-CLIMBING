// 當頁面加載完畢時執行載入
document.addEventListener("DOMContentLoaded", function () {
  loadFooter();
  loadNavBar();
  changeHeaderDesign();
  pageLinkHide();
});

// // 當視窗大小改變時重新載入適當的頁尾+調整頁首
window.addEventListener("resize", function () {
  loadFooter();
  changeHeaderDesign();
});

// 導覽列相關----------------------------------------------
function loadNavBar() {
  fetch("navbar.html") // 獲取 navbar.html 的內容
    .then((response) => response.text()) // 將響應轉換為文本
    .then((html) => {
      document.getElementById("navbar").innerHTML = html; // 將獲取的 HTML 插入到容器中
      openMenu(); // 確保在 navbar 加載後調用 openMenu
      logoHoverEffect();
      checkItemNumber();
    })
    .catch((error) => {
      console.error("載入導覽列失敗:", error);
    });
}

function openMenu() {
  $("#menu-btn").click(function () {
    $(".sub-menu").hide();
    $(".menu-link").find("p:first").css("color", "#fff");
    $("#menu-link-list").toggle();
    let navBarBGColor = $("#navbar").css("backgroundColor");

    if (window.matchMedia("(width < 770px)").matches) {
      if (navBarBGColor != "rgba(52, 74, 94, 0.9)") {
        navBarBGColor = $("#navbar").css(
          "backgroundColor",
          "rgba(52, 74, 94, 0.9)"
        );
      } else {
        navBarBGColor = $("#navbar").css("backgroundColor", "transparent");
      }
    }
  });

  $(".menu-link").click(function () {
    $(".menu-link").not(this).find(".sub-menu").hide();
    $(".menu-link").not(this).find("p:first").css("color", "#fff");

    $(this).find(".sub-menu").toggle();

    let menuLinkColor = $(this).find("p:first").css("color");

    if (menuLinkColor != "rgb(231, 125, 38)") {
      menuLinkColor = $(this).find("p:first").css("color", "rgb(231, 125, 38)");
    } else {
      menuLinkColor = $(this).find("p:first").css("color", "#fff");
    }
  });
}

function logoHoverEffect() {
  $("#navbar .logo-pic").click(function () {
    // 使用 find() 方法來選擇 .logohover 元素
    $(this).find(".logohover").css("z-index", "1");
  });
}

// 檢查 #item-number 的值
function checkItemNumber() {
  let itemNumber = $("#item-number").text();
  itemNumber = parseInt(itemNumber, 10); // 轉換為數字

  if (itemNumber > 0) {
    $("#item-number").show(); // 如果 itemNumber 大於 0，則顯示
  } else {
    $("#item-number").hide(); // 否則隱藏
  }
}

// 頁首格式相關----------------------------------------------

function changeHeaderDesign() {
  // if (window.innerWidth < 770) {
  //   $("#page-intro-small").append($(".page-intro .up"));
  //   $(".page-intro").remove();
  // }
  if (window.innerWidth < 770) {
    // 當視窗寬度小於 770，移動 .up 到 #page-intro-small
    $("#page-intro-small").append($(".page-intro .up"));
  } else {
    // 當視窗寬度大於或等於 770，將 .up 移回原來的位置
    $(".page-intro").append($(".page-intro-small .up"));
  }
}

function pageLinkHide() {
  if (!window.location.href.includes("index.html")) {
    if (window.innerWidth < 770) {
      $(".pagelink").hide();
    } else {
      $(".pagelink").show();
    }
  }
}

/////footer相關---------------------------------------------

//load footer
function loadFooter() {
  const footerFile =
    window.innerWidth <= 768 ? "footer-small.html" : "footer-desktop.html";

  fetch(footerFile)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer-container").innerHTML = html;
      emailSub();
    })
    .catch((error) => {
      console.error("載入頁尾失敗:", error);
    });
}

//email subscribtion
function emailSub() {
  document
    .getElementById("email-submit")
    .addEventListener("click", function (e) {
      e.preventDefault(); // 阻止表單的默認提交行為

      let emailInput = document.getElementById("customer-email").value;

      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 簡單的電子郵件格式驗證正則表達式

      if (emailPattern.test(emailInput)) {
        window.alert(
          "Thanks for keeping up with us! Let's reach new heights together!"
        );
      } else {
        window.alert(
          "Oops! There seems to be a typing error, please try again."
        );
      }
    });
}
