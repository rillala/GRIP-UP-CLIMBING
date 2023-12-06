// 當頁面加載完畢時執行頁尾載入navbar
document.addEventListener("DOMContentLoaded", (event) => {
  fetch("navbar.html") // 獲取 navbar.html 的內容
    .then((response) => response.text()) // 將響應轉換為文本
    .then((html) => {
      document.getElementById("navbar").innerHTML = html; // 將獲取的 HTML 插入到容器中
    })
    .catch((error) => {
      console.error("載入導覽列失敗:", error);
    });
});

// 當頁面加載完畢時執行頁尾載入footer
// 以下預備用，之後有小裝置的footer的時候使用:

// function loadFooter() {
//   const footerFile = window.innerWidth >= 1280 ? 'footer-desktop.html' : 'footer-mobile.html';

//   fetch(footerFile)
//     .then(response => response.text())
//     .then(html => {
//       document.getElementById('footer-container').innerHTML = html;
//     });
// }

// // 初次載入頁面時執行
// loadFooter();

// // 當視窗大小改變時重新載入適當的頁尾
// window.onresize = loadFooter;

document.addEventListener("DOMContentLoaded", (event) => {
  fetch("footer-desktop.html") // 獲取 footer.html 的內容
    .then((response) => response.text()) // 將響應轉換為文本
    .then((html) => {
      document.getElementById("footer-container").innerHTML = html; // 將獲取的 HTML 插入到容器中
      emailSub();
    })
    .catch((error) => {
      console.error("載入頁尾失敗:", error);
    });
});

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
