console.log("Hello");
let backgroundButton = document.getElementById("words");
let body = document.querySelector("button");
function invertColors() {
  body.style.backgroundColor = aquamarine;
}
backgroundButton.addEventListener("click", invertColors);
