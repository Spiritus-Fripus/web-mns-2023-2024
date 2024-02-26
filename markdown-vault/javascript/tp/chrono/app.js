const screen = document.querySelector("#chrono");
const start = document.querySelector("#startBtn");
const stop = document.querySelector("#stopBtn");
const reset = document.querySelector("#resetBtn");
let secondes = 0;
let time;

start.addEventListener("click", () => {
  if (time) return;
  time = setInterval(() => {
    secondes++;
    screen.innerText = secondes;
  }, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(time);
  time = 0;
});

reset.addEventListener("click", () => {
  clearInterval(time);
  secondes = 0;
  screen.innerText = secondes;
});
