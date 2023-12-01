//1.整理出each array:[title,[q,a],[q,a]...]
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

// QA按鈕類別text更換
//QA問答替換
let current = document.getElementById("qa-link");

document.querySelectorAll(".type.btn-light.h5").forEach((button) => {
  button.addEventListener("click", function () {
    let clickText = current.innerHTML;

    // 將 #qa-link 的文字設置為當前按鈕的文字
    current.innerHTML = this.innerHTML;

    // 將按鈕的文字設置為原本 #qa-link 的文字
    this.innerHTML = clickText;

    checkWhich();
  });
});

//-1.確認#qa-link.value,與哪個 array[0]一樣
function checkWhich() {
  for (let i = 0; i < QAlist.length; i++) {
    if (current.innerText === QAlist[i][0]) {
      document.querySelector("#qa-list").innerHTML = buildQAarea(QAlist[i]);
    }
  }
}

//-2.將下方innerHTML替換為該array內容

//3.依array內容建立QA格式的innerHTML
function buildQAarea(arr) {
  let total = "";

  for (let i = 1; i < arr.length; i++) {
    total += `<li><input type="checkbox" name="question" id="course-q${i}" />`;

    for (let j = 0; j < 2; j++) {
      if (j === 0) {
        total += `<label for="course-q${i}"><div class="content q">
        <p class="qa-type h6">Q:</p>
        <p class="text pbig">${arr[i][j]}</p>
        <div class="btn-icon"
          ><img src="./FAQ/arrow-up.svg" alt=""
        /></div></div></label>`;
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
