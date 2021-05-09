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
    base.appendChild(timer)
    timer.innerHTML = time;
    console.log(`Faltam ${time} segundos.`)
    console.log(typeof(time))
    d = setTimeout(decrement, 1000);
}

function decrement() {
    if(time > 0) {
        time -= 1;
        addTimer(time);
    } else {
        return;
    }
}

function resetTimer() {
    base.removeChild(timer);
    clearInterval(d);
}


start.addEventListener('click', getTime);

reset.addEventListener('click', resetTimer);
