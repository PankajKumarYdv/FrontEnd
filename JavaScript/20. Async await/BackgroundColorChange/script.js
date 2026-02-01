const body = document.body;
const changeColor = setInterval(() => {
  let red = Math.floor(Math.random() * 126);
  let green = Math.floor(Math.random() * 126);
  let blue = Math.floor(Math.random() * 126);
  let rgb = `rgb(${red},${green},${blue})`;
  body.style.background = rgb;
}, 2000);

const button = document.querySelector("button");
button.addEventListener("click", () => {
  clearInterval(changeColor);
  button.textContent = body.style.background;
});
