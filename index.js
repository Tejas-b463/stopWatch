const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

// Declare the variable store start time and id of the set interval update display
let startTime, IntervalId;

//Define the start function that will starts time 

function start() {
    startTime = Date.now(); // start se set interval function
    IntervalId = setInterval(() => {
        //current time ko substract karege
        const elapsedTime = Date.now() - startTime;
        const seconds = Math.floor(elapsedTime / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        // create a formate time the string format
        // pad function 
        // hh:mm:ss formate
        const formattedTime = `${pad(hours)}:${pad(minutes)}:
        ${pad(seconds)}`

        //update the element
        display.textContent = formattedTime;

    }, 10);
}

function stop() {
    clearInterval(IntervalId);
}

function reset() {
    clearInterval(IntervalId);
    display.textContent = '00:00:00';
}
// adding a leading to a number id its less than 10
function pad(number) {
    return number < 10 ? '0' + number : number;
}
// start stop reset work on button 
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);