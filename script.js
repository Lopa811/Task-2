let startTime, updatedTime, difference, tInterval, running = false;
let lapCounter = 1;
let laps = [];

const display = document.getElementById('display');
const lapList = document.getElementById('lap-list');

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);

function startTimer() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
    }
}

function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    display.innerHTML = "00:00:00";
    lapList.innerHTML = '';
    lapCounter = 1;
    laps = [];
}

function recordLap() {
    if (running) {
        const lapTime = display.innerHTML;
        laps.push(`Lap ${lapCounter}: ${lapTime}`);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        lapList.appendChild(lapItem);
        lapCounter++;
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    display.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" +
                        (minutes < 10 ? "0" + minutes : minutes) + ":" +
                        (seconds < 10 ? "0" + seconds : seconds);
}
