const clock = document.getElementById("clock");
const date = new Date();
clock.style.setProperty("--set-seconds", date.getSeconds());
clock.style.setProperty("--set-minutes", date.getMinutes());
clock.style.setProperty("--set-hours", date.getHours() % 12);
