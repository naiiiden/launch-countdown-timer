const year = new Date().getFullYear();
const birthday = new Date(year, 6,5).getTime();
const birthdayNextYear = new Date(year + 1, 6, 5).getTime();
const month = new Date().getMonth();

let timer = setInterval(function() {

  const today = new Date().getTime();

  let diff;

  if (month > 6) {
    diff = birthdayNextYear - today;
  }else {
    diff = birthday - today;
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector(".days").textContent = days;
  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".seconds").textContent = seconds;
}, 1000);