// function
function digitalClock() {
  // declare variable
  const date = new Date();
  const timeShow = document.getElementById('time');
  const small = document.querySelector('small');

  // get times
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeFormates = 'AM';

  // condition
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
    timeFormates = 'PM';
  }

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  timeShow.innerHTML = `${hours}:${minutes}:${seconds}`;
  small.innerHTML = timeFormates;

  setInterval(digitalClock, 1000);
}

digitalClock();