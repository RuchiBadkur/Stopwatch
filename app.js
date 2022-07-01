let timer =  document.getElementById('watch');
var startBtn =  document.getElementById('start');
var pauseBtn =  document.getElementById('pause');
var stopBtn =  document.getElementById('stop');
pauseBtn.disabled = true;
stopBtn.disabled = true;
var hr = 0;
var min = 0;
var sec = 0;
var stopTimer = true;

function start(){
    timer.innerHTML = "00:00:00";
    hr = 0;
    min  = 0;
    sec = 0;
   if(stopTimer == true)
       stopTimer = false;  
       timerCycle();  
      
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;

}

function pause(){

    if(stopTimer == false){
        document.getElementById('pause').innerHTML = "continue";
        // document.getElementById('pause').className = "changeColor";
        stopTimer = true;
        startBtn.disabled = true;
    }else{
        document.getElementById('pause').innerHTML = "pause";
        stopTimer = false;
        setTimeout("timerCycle()", 500);
    }
}

// function continuee(){
//     document.getElementById('pause').innerHTML = "pause";
//     if(stopTimer == true)
//         stopTimer = false;

//      timerCycle();
// }


function timerCycle(){
    if(stopTimer==false){
    hr = parseInt(hr);
    min = parseInt(min);
    sec = parseInt(sec);

    sec = sec+1;

    if(sec == 60){
        min = min + 1;
        sec = 00;
    }

    if(min == 60){
        hr = hr + 1;
        min = 0;
        sec = 0;
    }

    if(hr < 10){
        hr = "0" + hr;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }

    timer.innerHTML = hr + ":" + min +":" + sec;
    setTimeout("timerCycle()", 1000);
    }
}
function stop(){
    
    stopTimer = true;
    // clearTimeout("timerCycle()", 1000);
    timer.innerHTML = "00:00:00";
    hr = 0;
    min  = 0;
    sec = 0;
    document.getElementById('pause').innerHTML = "pause";
     startBtn.disabled = false;
     pauseBtn.disabled = true;
     stopBtn.disabled = true;
}
