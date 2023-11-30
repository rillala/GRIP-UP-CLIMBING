//email subscribtion

document.getElementById("email-submit").addEventListener("click", function (e) {
  e.preventDefault(); // 阻止表單的默認提交行為

  let emailInput = document.getElementById("customer-email").value;

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 簡單的電子郵件格式驗證正則表達式

  if (emailPattern.test(emailInput)) {
    window.alert(
      "Thanks for keeping up with us! Let's reach new heights together!"
    );
  } else {
    window.alert("Oops! There seems to be a typing error, please try again.");
  }
});

// id = "email-submit";
// <script src="./universe/footer.js"></script>;
