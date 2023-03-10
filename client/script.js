import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const from = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

let loadInterval;

function loader(element) {
  element.textContent = "";

  loadInterval = setInterval(() => {
    element.textContent = ".";

    if (element.textContent === "....") {
      element.textContent = "";
    }
  }, 300);
}

function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      text.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

function generateUniqId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexdecimalString = randomNumber.toString(16);

  return `${timestamp}-${hexdecimalString}`;
}

function chatStripe(isAi, value, uniqeId) {
  return `<div class="wrapper ${idAi && "ai"}">
      <div class="chat">
        <div class="profile">
          <img src="${ai ? bot : user}"
          alt="${ai ? "bot" : "user"}"
          />
        </div>
        <div class="message" id="${uniqeId}>
          ${value}
        </div>
      </div>
    </div>`;
}
