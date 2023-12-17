loadFooter();
loadNavBar();

// 當頁面加載完畢時執行載入
document.addEventListener("DOMContentLoaded", function () {
  // loadFooter();
  // loadNavBar();
  pageLinkHide();
  changeHeaderDesign();
});

// // 當視窗大小改變時重新載入適當的頁尾+調整頁首
window.addEventListener("resize", function () {
  loadFooter();
  // loadNavBar();
  pageLinkHide();
  changeHeaderDesign();
});

// 導覽列相關----------------------------------------------
function loadNavBar() {
  fetch("navbar.html") // 獲取 navbar.html 的內容
    .then((response) => response.text()) // 將響應轉換為文本
    .then((html) => {
      // 將獲取的 HTML 插入到容器中
      document.getElementById("navbar").innerHTML = html;

      // 確保在 navbar 加載後調用
      openMenu();
      openCart();
      logoHoverEffect();
      addtobag();
      checkItemNumber();
      cardItemNumberChange();
      checkCoupon();
      updateSummarySubtotal();
      updateOrderSummary();
    })
    .catch((error) => {
      console.error("載入導覽列失敗:", error);
    });
}

function openMenu() {
  $("#menu-btn").click(function () {
    $(".sub-menu").hide();
    $(".menu-link").find("p:first").css("color", "#fff");
    $("#shop-cart").hide();
    $("#menu-link-list").toggle();

    let navBarBGColor = $("#navbar").css("backgroundColor");

    if (window.matchMedia("(width < 450px)").matches) {
      if ($("#menu-link-list").is(":visible")) {
        $("#navbar").css("backgroundColor", "rgba(52, 74, 94, 0.9)");
      } else {
        $("#navbar").css("backgroundColor", "transparent");
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

// 購物車相關-------------

function openCart() {
  $("#shopping-car-icon img").click(function () {
    $("#menu-link-list").hide();
    $("#shop-cart").toggle();

    if (window.innerWidth < 450) {
      if ($("#shop-cart").is(":visible")) {
        $("#navbar").css("backgroundColor", "rgba(52, 74, 94, 0.9)");
      } else {
        $("#navbar").css("backgroundColor", "transparent");
      }
    }
  });
}

// 購物車裡 每張卡片的增減刪除事件
function cardItemNumberChange() {
  $(".shopbag .card").each(function () {
    let $card = $(this);
    let $buyNumber = $card.find(".cart-buy-number");
    let $productTotal = $card.find(".product-total");

    // 綁定減號事件
    $card.find(".card-minus").click(function () {
      let currentNum = parseInt($buyNumber.val(), 10);
      if (currentNum > 1) {
        currentNum -= 1;
        $buyNumber.val(currentNum);
        updateProductTotal(currentNum, $productTotal);
        updateSummarySubtotal();
        checkItemNumber();
        updateOrderSummary();
      }
    });

    // 綁定加號事件
    $card.find(".card-plus").click(function () {
      let currentNum = parseInt($buyNumber.val(), 10);
      currentNum += 1;
      $buyNumber.val(currentNum);
      updateProductTotal(currentNum, $productTotal);
      updateSummarySubtotal();
      checkItemNumber();
      updateOrderSummary();
    });

    //綁定刪除事件
    $card.find(".delete-btn").click(function () {
      $card.remove();
      updateSummarySubtotal();
      checkItemNumber();
      updateOrderSummary();
    });

    $card.find(".edit-btn").click(function () {
      // 使用.attr()來獲取和設置圖像的src屬性
      let imgSrc = $(this).find("img").attr("src");

      if (imgSrc.includes("edit")) {
        $(this).find("img").attr("src", "./universe/check.svg");
        $(".select-box").show();
      } else {
        $(this).find("img").attr("src", "./universe/edit.svg");
        $(".select-box").hide();

        // 更新卡片的顏色和尺寸
        let colorValue = $card.find(".approachShoe-edit-color").val();
        let sizeValue = $card.find(".approachShoe-cart-size").val();
        console.log(colorValue);

        $card.find(".card-color").text(colorValue);
        $card.find(".card-size").text(sizeValue);
      }
    });
  });
}

// 依據該商品卡片數量更新總金額
function updateProductTotal(quantity, $totalElement) {
  let totalPrice = quantity * 3400;
  let formattedTotal = `$${totalPrice.toLocaleString()}`;
  $totalElement.text(formattedTotal);
}

// 依據所有商品卡片加總金額更新 order summary 處總金額
function updateSummarySubtotal() {
  let totalSum = 0;
  $(".shopbag .card").each(function () {
    let quantity = parseInt($(this).find(".cart-buy-number").val(), 10);
    totalSum += quantity * 3400;
  });
  let formattedSum = `$${totalSum.toLocaleString()}`;
  $("#summary-subtotal").text(formattedSum);
}

// 更新 order summary 的總金額
function parseCurrency(str) {
  return parseInt(str.replace(/[^0-9]/g, ""), 10);
}

function updateOrderSummary() {
  let subtotal = parseCurrency($("#summary-subtotal").text());
  let shippingCost;
  let discount = parseCurrency($("#discount").text());

  if (subtotal > 15000) {
    shippingCost = 0;
    $("#shippingStatue").text(
      " Congratulations! Your are qualifies for free standard shipping."
    );
  } else {
    shippingCost = 500;
    let remain = (15000 - subtotal).toLocaleString();
    $("#shippingStatue").text(
      `You are still $${remain} away from free shipping.`
    );
  }

  // 更新運費
  $("#order-shipping").text(`$${shippingCost.toLocaleString()}`);

  // 計算訂單總計
  let orderTotal = subtotal + shippingCost - discount;
  $("#order-total").text(`$${orderTotal.toLocaleString()}`);
}

// 確認折扣碼是否有效
function checkCoupon() {
  $("#coupon-input").on("input", function () {
    let inputValue = $(this).val();
    if (inputValue == "coupon") {
      $("#coupon-result").text("Success").css("color", "var(--orange)");
      $("#discount").text("$ 100");
    } else {
      $("#coupon-result").text("Fail").css("color", "#111");
      $("#discount").text("$ 0");
    }
    updateOrderSummary();
  });
}

// 更新導覽列上購物車圖示的數量
function checkItemNumber() {
  let orderSummary = 0;

  $(".card-buttom").each(function () {
    orderSummary += parseInt($(this).find(".cart-buy-number").val(), 10);
  });

  $("#cart-product-total").text(orderSummary);
  $("#cart-item-number").text(orderSummary);
  let itemNumber = $("#cart-item-number").text();

  // > 0 則顯示在導覽列上
  itemNumber = parseInt(itemNumber, 10); // 轉換為數字
  if (itemNumber > 0) {
    $("#cart-item-number").show(); // 如果 itemNumber 大於 0，則顯示
  } else {
    $("#cart-item-number").hide(); // 否則隱藏
  }
}

// 加入購物車
function addtobag() {
  // 先複製一份card
  let cardTemplate = $(".cart .product-list .card").first().clone();

  $("#add-btn").click(function () {
    // 複製.card元素
    let newCard = cardTemplate.clone();

    // 抓選擇的顏色的尺寸, 寫入到 card 範本中
    let colorValue = $('input:radio[name="color"]:checked').val();
    let sizeValue = $('input:radio[name="buy-size"]:checked').val();
    let numValue = $("#buy-number").val();

    newCard.find(".card-color").text(colorValue);
    newCard.find(".card-size").text(sizeValue);
    newCard.find(".cart-buy-number").val(numValue);

    // 將新的 .card 元素添加到 .product-list 中
    $(".cart .product-list").append(newCard);
    checkItemNumber();
    cardItemNumberChange();
    checkCoupon();
    updateSummarySubtotal();
    updateOrderSummary();
  });
}

// 頁首格式相關----------------------------------------------

function changeHeaderDesign() {
  if (window.innerWidth < 770) {
    // 當視窗寬度小於 770，移動 .up 到 #page-intro-small
    $("#page-intro-small").append($(".page-intro .up"));
  } else {
    // 當視窗寬度大於或等於 770，將 .up 移回原來的位置
    $(".page-intro").prepend($(".page-intro-small .up"));
  }
}

const fileArr = [
  "center.html",
  "community.html",
  "courseActivity.html",
  "FAQ.html",
  "product.html",
  "shop.html",
  "team.html",
];

function pageLinkHide() {
  //看能不能改掉
  if (fileArr.some((file) => window.location.href.includes(file))) {
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
  let footerFile =
    window.innerWidth <= 1200 ? "footer-small.html" : "footer-desktop.html";

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

// 其他頁面連過來FAQ的特定類型,沒成功
// function SitemapToFAQ() {
//   $(document).ready(function () {
//     $("li a.faq-click").on("click", function (event) {
//       let faq_hash = window.location.hash;

//       if (faq_hash.includes("faq")) {
//         // 假設每個問題種類的按鈕有一個對應的 ID 或類別
//         // 這裡的 "#button" 是假設的按鈕 ID，根據你的實際情況修改
//         let clickIndex = parseInt(faq_hash.replace("#faq", ""));

//         if (window.innerWidth < 770) {
//           //小裝置時的功能
//           $("#qa-type-list-small .h5").removeClass("btn-light-hover");
//           $("#qa-type-list-small .h5")
//             .eq(clickIndex)
//             .addClass("btn-light-hover");

//           let content = buildQAarea(QAlist[clickIndex]);
//           $("#qa-list").html(content);

//           checkAnswer();
//         }
//         // else {
//         //   //大裝置時的功能
//         //   $("#qa-link").text = QAlist[clickIndex][0];
//         //   $("#qa-type-list-desktop .type.btn-light");

//         //   let filteredArray = QAlist.slice(0, clickIndex).concat(
//         //     QAlist.slice(clickIndex + 1)
//         //   );

//         //   $("#qa-type-list-desktop .type.btn-light").each(function (index) {
//         //     if (index < filteredArray.length) {
//         //       $(this).text(filteredArray[index]);
//         //     }
//         //   });
//         // }
//       }
//     });
//   });
// }
