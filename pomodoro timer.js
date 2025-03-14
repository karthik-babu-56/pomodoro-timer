let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let shortbreakBtn = document.getElementById("shortbreakBtn");
let longbreakBtn = document.getElementById("longbreakBtn");

let minutesText = document.getElementById("minutes");
let secondsText = document.getElementById("seconds");
minutesText.textContent = 25;
secondsText.textContent = "00";

let timeId = null;

let min = 24
let sec = 59

function startTimer() {
    if (timeId !== null) return;

    minutesText.textContent = min;
    timeId = setInterval(function() {
        sec -= 1
        secondsText.textContent = sec
        if (sec === 0) {
            min -= 1
            minutesText.textContent = min
            sec = 59
        }
        if (min === -1) {
            clearInterval(timeId)
            minutesText.textContent = "00";
            secondsText.textContent = "00";
        }
        stopBtn.onclick = function() {
            clearInterval(timeId)
            timeId = null;
        }
        resetBtn.onclick = function() {
            clearInterval(timeId)
            timeId = null;
            min = 24;
            sec = 59;
            minutesText.textContent = "25";
            secondsText.textContent = "00";
        }
    }, 100)
}

startBtn.onclick = function() {
    startTimer()
}

shortbreakBtn.onclick = function() {
    clearInterval(timeId)
    timeId = null;
    min = 4;
    sec = 59;
    minutesText.textContent = "05";
    secondsText.textContent = "00";
}

longbreakBtn.onclick = function() {
    clearInterval(timeId)
    timeId = null;
    min = 14;
    sec = 59;
    minutesText.textContent = "15";
    secondsText.textContent = "00";
}