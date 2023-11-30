// 依照點擊按鈕更換地圖

document.getElementById("taipei-btn").addEventListener("click", function () {
  document.querySelector(".googlemap iframe").src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.219708777983!2d121.64586191103086!3d25.06054137770665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d5342db074277%3A0xd78872d5d22e9380!2z57ev6IKy6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1701351055115!5m2!1szh-TW!2stw";
});

document.getElementById("taichung-btn").addEventListener("click", function () {
  document.querySelector(".googlemap iframe").src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.467830527485!2d121.54067261103053!3d25.052127977712033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe6b0446815%3A0xf006dde8c27afcc7!2z57ev6IKyVGliYU1l6ZmE6Kit5Y-w5YyX6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1701351205680!5m2!1szh-TW!2stw";
});

document.getElementById("kao-btn").addEventListener("click", function () {
  document.querySelector(".googlemap iframe").src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115751.9737022725!2d121.13525252377633!3d24.957635500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823ea50c732a5%3A0x1b5e6ee66e9fec49!2z57ev6IKyVGliYU1l6ZmE6Kit5Lit5aOi6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1701351107468!5m2!1szh-TW!2stw";
});
