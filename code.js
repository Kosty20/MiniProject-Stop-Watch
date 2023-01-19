

const secondsBox = document.querySelector('.seconds');
const tensBox = document.querySelector('.tens');
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');

let tens = 0;
let seconds = 0;
let interval = 0;

startBtn.onclick = () => {
    if(!interval){
        interval = setInterval(startTimer, 10);
    }
}

stopBtn.onclick = stopTimer;

resetBtn.onclick = () => {
    stopTimer();
    secondsBox.innerText = '00';
    tensBox.innerText = '00';
    seconds = 0;
    tens = 0;
}

function stopTimer() {
    clearInterval(interval);
    interval = 0;
}

function startTimer() {
    tens++

    if(tens < 10){
        tensBox.innerText = '0' + tens;
    }

    if(tens >= 10){
        tensBox.innerText = tens;
    }

    if(tens > 99){
        tens = 0;
        tensBox.innerText = '0';
        seconds++;
        if(seconds < 10){
            secondsBox.innerText = '0' + seconds;
        }
        if(seconds >= 10){
            secondsBox.innerText = seconds;
        }
    }
}

function randomNum (num){
    return Math.floor(Math.random() * num);
}