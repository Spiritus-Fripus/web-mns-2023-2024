const squareEl = document.querySelector(".square");
const STEP = 5;
let position = 0;
let isIntervalIsRunning = 0;

function addOffset() {
  console.log("addOffset");
  position += STEP;
  squareEl.style.left = position;
}

function moveSquare(e) {
  console.log(e);
  if (isIntervalIsRunning) return;
  isIntervalIsRunning = setInterval(addOffset, 50);
}

function removeInterval(intervalId) {
  clearInterval(intervalId);
  isIntervalIsRunning = 0;
}

squareEl.addEventListener("mouseenter", moveSquare);

function stopSquare() {
  removeInterval(isIntervalIsRunning);
}

squareEl.addEventListener("mouseleave", stopSquare);
