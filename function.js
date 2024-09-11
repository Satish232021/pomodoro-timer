const start = document.getElementById('start');
const stopElement = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

start.addEventListener('click', startTimer);
stopElement.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);


let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = Math.floor (timeLeft % 60) ;
    let formattedTime = `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`

    timer.innerHTML = formattedTime;
}

let interval = null;
function startTimer() {

    if (interval !== null) {
        return;
    }else {
        interval = setInterval(() => {
            timeLeft--;
            updateTimer();
            if(timeLeft === 0){
                clearInterval(interval);
                alert('time is up');
                timeLeft = 1500;
                updateTimer();
            }
        },1000);
    }
    
}
function stopTimer() {
    clearInterval(interval);
    interval = null;
}
function resetTimer() {
    clearInterval(interval);
    interval = null;
    timeLeft = 1500;
    updateTimer();
}
