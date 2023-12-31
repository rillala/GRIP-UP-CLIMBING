//各類問答陣列整理: each array=[title,[q,a],[q,a]...]
const courseQA = [
  "CLIMBING\nCOURSES",
  [
    "What foundation do I need to enroll in a course?",
    "We offer a range of courses suitable for beginners to advanced climbers. Beginner courses require no prior experience as we start teaching from the most basic skills.",
  ],
  [
    "How do I cancel or change a booked course?",
    "Please go to your member area and select 'My Reservations' to cancel or change. Note that cancellations within 48 hours before the course starts may incur a fee.",
  ],
  [
    "Can I bring a partner/friend to join the course with me?",
    "Certainly, but ensure that each participant is properly registered.",
  ],
  [
    "Are there any age or weight restrictions to participate in a course?",
    "We recommend participants be over 6 years of age. For weight restrictions, for safety reasons, it is suggested not to exceed 100 kilograms.",
  ],
  [
    "Does the course fee include insurance costs?",
    "Some of our courses include insurance costs. Please refer to the course description page or contact us for confirmation.",
  ],
];

const purchaseQA = [
  "PURCHASE\n& TRACK",
  [
    "How can I track my order?",
    "After ordering, you will receive a confirmation email with a tracking link and order number.",
  ],
  [
    "How long will it take to receive my purchase?",
    "Orders generally arrive within 3-5 business days. If there are any special circumstances, you will be notified.",
  ],
  [
    "How do I request a return or exchange?",
    "Please go to 'My Orders' and select the return or exchange option, then follow the instructions. Keep the original packaging and receipt.",
  ],
  [
    "What payment methods do you accept?",
    "We accept credit cards, bank transfers, and PayPal, among others.",
  ],
  [
    "Can my purchase be shipped to an international address?",
    "Yes, we offer international shipping services. Shipping times and costs vary depending on the destination. Please check the specific shipping options and costs at checkout.",
  ],
  [
    "What should I do if I receive a damaged or incorrect item?",
    "If you receive any damaged or incorrect items, please contact our customer service within 7 days of receiving the product. We will provide specific instructions for returns or exchanges.",
  ],
];

const memberQA = [
  "MEMBERSHIP\n& CENTER",
  [
    'How do I become a member of "Grip Up"?',
    "Come to our venue for a basic climbing education course and complete an application form.",
  ],
  [
    "What special offers or benefits do members have?",
    "Members can enjoy discounts on courses, exclusive events, and use of the Co-working space.",
  ],
  [
    "How do I reserve the Co-working space?",
    "Go to the member area and select 'Reserve Space' to book the Co-working space.",
  ],
  [
    "How can I rent the yoga studio?",
    "If you're interested in renting the yoga studio, please contact our service personnel directly for arrangements.",
  ],
];

const safetyQA = [
  "SAFETY &\nOTHERS",
  [
    "Can I organize a private climbing group or event myself?",
    "Of course, please contact us in advance and we will provide the necessary information and assistance.",
  ],
  [
    "How far in advance do I need to sign up for special events (like Halloween costume climbing)?",
    "We recommend signing up at least one week in advance to ensure availability.",
  ],
  [
    "Do I need to bring my own climbing equipment?",
    "If you have your own equipment, you are welcome to bring it. However, the venue also offers rental services.",
  ],
  [
    "How do you ensure the safety of climbers?",
    "Our instructors are rigorously trained and the equipment is regularly maintained and inspected. All beginners must undergo basic safety education before their first climb.",
  ],
  [
    "What should I pay attention to when climbing for the first time?",
    "We recommend wearing comfortable athletic clothing and shoes and listening to the instructor's guidance.",
  ],
  [
    'Can I host a birthday party or corporate team-building event at "Grip Up"?',
    "Absolutely, we offer various packages and custom solutions. Contact us for more information.",
  ],
  [
    "Does the venue have parking facilities?",
    "We provide parking information near the venue, but we recommend checking in advance or using public transport.",
  ],
];

const QAlist = [courseQA, purchaseQA, memberQA, safetyQA];

//QA問答替換
let current = document.getElementById("qa-link");

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    // 小裝置的時候執行
    changeQAtypeSmall();
    $("#qa-type-list-small .h5:first").addClass("btn-light-hover");
  } else {
    // 桌機+筆電的時候執行
    changeQAtypeDesktop();
  }
  checkAnswer();
});

$(window).resize(function () {
  if (window.innerWidth <= 768) {
    // 小裝置的時候執行
    changeQAtypeSmall();
  } else {
    // 桌機+筆電的時候執行
    changeQAtypeDesktop();
  }
  checkAnswer();
});

// 大裝置: QA 按鈕類別 text 更換
function changeQAtypeDesktop() {
  document.querySelectorAll(".type.btn-light.h5").forEach((button) => {
    button.addEventListener("click", function () {
      let clickText = current.innerHTML;

      // 將 #qa-link 的文字設置為當前按鈕的文字
      current.innerHTML = this.innerHTML;

      // 將按鈕的文字設置為原本 #qa-link 的文字
      this.innerHTML = clickText;

      //根據按下元素的value, 去替換掉qa-area裡的內容
      for (let i = 0; i < QAlist.length; i++) {
        if (current.innerText === QAlist[i][0]) {
          //-2.將下方innerHTML替換為該array內容
          document.querySelector("#qa-list").innerHTML = buildQAarea(QAlist[i]);
        }
      }

      //將答案展開的功能套用
      checkAnswer();
    });
  });
}

// 小裝置: QA 按鈕類別 text 更換
function changeQAtypeSmall() {
  $("#qa-type-list-small .h5").each(function (index) {
    $(this).click(function () {
      $("#qa-type-list-small .h5").not(this).removeClass("btn-light-hover");
      let content = buildQAarea(QAlist[index]);
      $("#qa-list").html(content);
      $(this).addClass("btn-light-hover");

      checkAnswer();
    });
  });
}

//3.依問答類別array內容建立QA格式的innerHTML
function buildQAarea(arr) {
  let total = "";

  for (let i = 1; i < arr.length; i++) {
    total += `<li>`;

    for (let j = 0; j < 2; j++) {
      if (j === 0) {
        total += `<div class="content q">
        <p class="qa-type h6">Q:</p>
        <p class="text pbig">${arr[i][j]}</p>
        <div class="btn-icon"
          ><img class="qa-icon" src="./FAQ/arrow-up.svg" alt=""
        /></div></div>`;
      } else {
        total += `<div class="content a">
        <p class="qa-type h6">A:</p>
        <p class="text pbig">${arr[i][j]}</p>
      </div>`;
      }
    }

    total += "</li>";
  }

  return total;
}

//展開答案區域功能:
function checkAnswer() {
  //選取所有的q
  const questions = document.querySelectorAll(".content.q");

  //對整個class集合裡的個別元素給予此function
  questions.forEach((question) => {
    question.addEventListener("click", function () {
      // 找到對應的回答元素，這邊假設每個問題後面緊跟著的元素是對應的回答，所以用nextElementSibling
      let answer = this.nextElementSibling;

      // 如果存在回答元素，則進行類別名切換
      if (answer && answer.classList.contains("a")) {
        answer.classList.toggle("a-hover");
      }

      // 找到問題中的圖標元素並切換類別名
      let icon = this.querySelector(".qa-icon");
      if (icon) {
        icon.classList.toggle("icon-hover");
      }
    });
  });
}
