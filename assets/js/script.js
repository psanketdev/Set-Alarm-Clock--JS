/*Authohr: Sanket Patil*/

console.log('this is alarm mini project');

let alarmTime = document.getElementById('alarmTime');
let setAlarm = document.getElementById('setAlarm');
let audio = new Audio('https://freshly-ground.com/data/audio/mpc/20150929%20-%20Amore%20(Dynamic%20Compressor%201.2.6).mp3');
setAlarm.addEventListener('click', setAlarmTime); 

function ringAlarm() {
  console.log('audio is ringing...');
  audio.play();
}

function setAlarmTime() {
  let alarmValue = new Date(alarmTime.value);
  let currentTime = new Date();
  alarmTime.value = "";
  let timeValue = alarmValue - currentTime;
  console.log(timeValue);
  
  if(timeValue >= 0) {
    setTimeout(function(){
      ringAlarm();
    }, timeValue);
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}