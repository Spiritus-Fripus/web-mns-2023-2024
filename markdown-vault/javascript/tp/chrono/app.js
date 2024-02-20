let screen = document.querySelector("#chrono");
let start = document.querySelector("#startBtn");
let stop = document.querySelector("#stopBtn");
let reset = document.querySelector("#resetBtn");
let secondes = 0;
let time;

start.addEventListener('click', () => {
	time = setInterval(() => {
		secondes++;
		screen.innerText = secondes;
	}, 1000);
});
stop.addEventListener('click', () => {
	clearInterval(time);
});

reset.addEventListener('click', () => {
	clearInterval(time);
	secondes = 0;
	screen.innerText = secondes;
});
