// load navbar
document.addEventListener("DOMContentLoaded", (event) => {
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
});

function openMenu() {
  $("#menu-btn").click(function () {
    $(".sub-menu").hide();
    $(".menu-link").find("p:first").css("color", "#fff");
    $("#menu-link-list").toggle();
    let navBarBGColor = $("#navbar").css("backgroundColor");

    if (window.matchMedia("(width < 768px)").matches) {
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

// 當#menu-btn被點擊的時候,menu-link-list展開, 然後背景顏色改變

/////----------------以下為footer相關-----------------------///////

// 當頁面加載完畢時執行頁尾載入footer
document.addEventListener("DOMContentLoaded", loadFooter);
// // 當視窗大小改變時重新載入適當的頁尾
window.addEventListener("resize", loadFooter);

//load footer
function loadFooter() {
  const footerFile =
    window.innerWidth >= 768 ? "footer-desktop.html" : "footer-small.html";

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
