const watch = document.getElementById("watch");
let timer = null;
let startTime = 0;
let elapsedTime =0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime =0;
    isRunning = false;
    
    watch.textContent ="00:00:00:00";
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime/3600000).toString().padStart(2, 0);
    let mins = Math.floor(elapsedTime /(1000*60) % 60).toString().padStart(2, 0);
    let sec = Math.floor(elapsedTime/1000 % 60).toString().padStart(2, 0);
    let msec = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2, 0);

    timeString = `${hours}:${mins}:${sec}:${msec}`;

    watch.textContent = timeString;
}