
const timerDiv = document.querySelector('.timer');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');


function Stopwatch(){
  let duration = 0; // counts up seconds
  let running = false; // true when already started, false when stopped
  let timer; // for interval

  // private methods
  const showDuration = function(){
    timerDiv.innerHTML = `<div class="duration">${duration}</div>`
    console.log(duration);   
  }

  const incrementTime = function(){
    duration++;
    showDuration();
  }

  // public methods
  this.reset = function(){
    duration = 0;
    timerDiv.innerHTML = '0';
  }

  this.start = function(){
    if(running) throw new Error('Stopwatch has already started.');
    running = true;
  
    timer = setInterval(incrementTime, 1000);
  
  }

  this.stop = function(){
    if(!running) throw new Error('Stopwatch is already stopped.');
    running= false;

    clearInterval(timer);
  }

  this.duration = function(){
    return duration;
  }
}

const sw = new Stopwatch();
startBtn.addEventListener('click', sw.start);
stopBtn.addEventListener('click', sw.stop);
resetBtn.addEventListener('click', sw.reset);
