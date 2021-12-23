const clock = document.getElementById("clock");

function getClock() {
  const date = new Date(); //현재 날짜와 시간으로 시간 생성
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
