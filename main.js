const base = document.querySelector('.base');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
let timer = document.createElement('h1');
let time;

function getTime() {
    time = Number(document.querySelector('#timerValue').value);
    console.log(time)
    addTimer(time);
}

function addTimer(time) {
    if(time > 0) {
        base.appendChild(timer)
        timer.innerHTML = time;
        console.log(`Faltam ${time} segundos.`)
        console.log(typeof(time))
        d = setTimeout(decrement, 1000);        
    } else {
        timer.innerHTML = "Time's up!"
    }

}

function decrement() {
    time -= 1;
    addTimer(time);
}

function resetTimer() {
    base.removeChild(timer);
    clearInterval(d);
}


start.addEventListener('click', getTime);

reset.addEventListener('click', resetTimer);
