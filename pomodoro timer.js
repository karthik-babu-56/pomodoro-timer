let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("startBtn");
let shortbreakBtn = document.getElementById("startBtn");
let longbreakBtn = document.getElementById("startBtn");

let minutesText = document.getElementById("minutes");
let secondsText = document.getElementById("seconds");
minutesText.textContent = 25
secondsText.textContent = "00";


startBtn.onclick = function() {
    let min = 25
    let sec = 60
    let timeId = setInterval(function() {
        sec -= 1
        secondsText.textContent = sec
        if (sec === 0) {
            min -= 1
            minutesText.textContent = min
            sec = 60
        }
        stopBtn.onclick = function() {
            console.log("Hi")
            setTimeout(timeId)

        }
    }, 1000)
}