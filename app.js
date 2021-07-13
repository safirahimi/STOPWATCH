const tens = document.querySelector('#tense');
const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');

const startBtn = document.querySelector('#btn-start');
const stopBtn = document.querySelector('#btn-stop');
const resetBtn = document.querySelector('#btn-reset');

startBtn.addEventListener('click', startTime);
stopBtn.addEventListener('click', stopTime);
resetBtn.addEventListener('click', resetTime);

let interval;

function startTime() {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}

function stopTime() {
  clearInterval(interval);
}

function resetTime() {
  clearInterval(interval);
  ten = '00';
  sec = '00';
  min = '00';
  tens.innerHTML = ten;
  seconds.innerHTML = sec;
}

// set timer
let ten = 0, sec = 0, min = 0;

function startTimer() {
  ten++;

  if (ten < 9) {
    tens.innerHTML = '0' + ten;
  }

  if (ten > 9) {
    tens.innerHTML = ten;
  }

  if (ten > 99) {
    sec++;
    seconds.innerHTML = '0' + sec;
    ten = 0;
    tens.innerHTML = '0' + 0;
  }

  if (sec > 9) {
    seconds.innerHTML = sec;
  }

  if (sec > 59) {
    min++;
    minutes.innerHTML = '0' + min;
    sec = 0;
    seconds.innerHTML = '0' + 0;
  }

  if (min > 9) {
    minutes.innerHTML = min;
  }
}