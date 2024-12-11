console.log("Hello");
let backgroundButton = document.getElementById("words");
let body = document.querySelector("button");
function invertColors() {
  body.style.backgroundColor = blue;
}
backgroundButton.addEventListener("click", invertColors);

// code for show/hide of surprise

let button = document.getElementById("mail-button");
console.log(button);
let card = document.querySelector("#card");
let openEnvelope = document.getElementById("open-envelope");
let closedEnvelope = document.getElementById("closed-envelope");
console.log(openEnvelope);
console.log(closedEnvelope);

function toggleCard() {
  card.classList.toggle("hidden");
  openEnvelope.classList.toggle("hidden");
  closedEnvelope.classList.toggle("hidden");
}
button.addEventListener("click", toggleCard);
