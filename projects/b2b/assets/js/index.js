// Set the countdown date
var countDownDate = new Date("Nov 31, 2025 00:00:00").getTime();

// Countdown timer
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Calculate time components
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Update minutes
  if (minutes.toString().length === 2) {
    document.getElementById("minute-1").innerHTML = minutes.toString()[1];
    document.getElementById("minute-2").innerHTML = minutes.toString()[0];
  } else {
    document.getElementById("minute-1").innerHTML = minutes.toString()[0];
    document.getElementById("minute-2").innerHTML = "0";
  }

  // Update hours
  if (hours.toString().length === 2) {
    document.getElementById("hour-1").innerHTML = hours.toString()[1];
    document.getElementById("hour-2").innerHTML = hours.toString()[0];
  } else {
    document.getElementById("hour-1").innerHTML = hours.toString()[0];
    document.getElementById("hour-2").innerHTML = "0";
  }

  // Update days
  if (days.toString().length === 2) {
    document.getElementById("day-1").innerHTML = days.toString()[1];
    document.getElementById("day-2").innerHTML = days.toString()[0];
  } else {
    document.getElementById("day-1").innerHTML = days.toString()[0];
    document.getElementById("day-2").innerHTML = "0";
  }

  // Clear timer if countdown is complete
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

// Shuffle array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap elements
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Logos to display
const logos = [
  "./assets/images/icon/full/daftar.svg",
  "./assets/images/icon/full/didar.svg",
  "./assets/images/icon/full/Hostiran.svg",
  "./assets/images/icon/full/iranikart.svg",
  "./assets/images/icon/full/logoLandin.svg",
  "./assets/images/icon/full/najva.png",
  "./assets/images/icon/full/novin.svg",
  "./assets/images/icon/full/ponisha.svg",
  "./assets/images/icon/full/raychat-logo.svg",
  "./assets/images/icon/full/zarin.svg",
];

var wrapper = document.getElementById("logo-wrapper");
let htmlData = "";
shuffle(logos);

// Generate logo HTML
for (let index = 0; index < logos.length; index++) {
  if ([1, 3, 5, 7].includes(index + 1)) {
    htmlData += `<div class="expand">
                    <div class="item">
                        <div class="img-container">
                            <img src=${logos[index]} />
                        </div>
                    </div>
                </div>`;
  } else {
    htmlData += `<div class="item">
                        <div class="img-container">
                            <img src=${logos[index]} />
                        </div>
                    </div>`;
  }
}
wrapper.innerHTML = htmlData;

// Discount cards
const cards = [
  // Example card
  {
    img: "./assets/images/icon/semi/daftar.svg",
    title: "Your Office",
    subtitle: "Virtual Office Services",
    text: "Social media marketing is one of the most popular digital marketing methods to boost businesses. Managing social media accounts is crucial for businesses in the online space. Consistency in publishing is key, and social media tools can help streamline your strategy.",
    color: "#d1172f",
    amount: "50% Discount",
    gift: "3-Month Packages",
    code: "B2B-Camp",
    link: "https://www.google.com",
  },
];

var campaignWrapper = document.getElementById("campaign-wrapper");
let d = "";
shuffle(cards);

// Generate campaign HTML
cards.map((item, idx) => {
  d += `
    <div class="col-10 col-sm-6 col-md-3 item mx-4 mb-5">
        <div class="row up align-items-center">
          <img src=${item.img} class="logo" />
          <div class="col d-flex flex-column align-items-start">
            <div class="title">${item.title}</div>
            <div class="subtitle">${item.subtitle}</div>
          </div>
        </div>
        <div class="row up">
          <div class="text">${item.text}</div>
        </div>
        <div class="row up">
          <div class="box" style="border: solid 1px ${item.color}">
            <div class="head" style="background-color: ${item.color};color:#fff;">Discount Amount</div>
            <div class="row justify-content-center align-items-center" style="color: #455063;">
              <div class="amount">${item.amount}</div>
              <div class="divider" style="border: solid 1px #455063;" ></div>
              <div class="gift">${item.gift}</div>
            </div>
          </div>
        </div>
        <img src="./assets/images/card-divider.svg" class="w-100 mb-4 mt-3" />
        <div class="row bottom">
          <div class="d-flex align-items-center">
            <img src="./assets/images/discount-icon.svg" />
            <div class="title">Discount Code</div>
          </div>
          <button class="code col" id="code-${idx}">
            <img src="./assets/images/copy.svg" />
            <div>${item.code}</div>
          </button>
          <button class="btn" onclick="window.location.assign('${item.link}')">
            <span>Go to</span>
            <span>${item.title}</span>
          </button>
        </div>
    </div>`;
});
campaignWrapper.innerHTML = d;

// Copy discount code
document.addEventListener("click", function (e) {
  for (let index = 0; index < cards.length; index++) {
    if (e.target && e.target.id == `code-${index}`) {
      let el = document.getElementById(`code-${index}`);
      copyToClipboard(cards[index].code);

      let before = el.innerHTML;
      el.innerHTML = `<div class="mx-2" style="color:${cards[index].color};font-weight:bold">Copied!</div>`;
      setTimeout(() => {
        el.innerHTML = before;
      }, 1000);
    }
  }
});

// Copy text to clipboard
function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
