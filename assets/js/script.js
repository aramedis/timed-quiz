//list all elements we will be monitoring
var startBtnEl = document.querySelector(".startBtn");
var timerEl = document.querySelector(".timer");

//create quiz as an object that is contained within a master array
quizArray = [q1, q2, q3, q4];

var q1 = {
    "option 1 F": false,
    "option 2 T": true,
    "option 3 F": false,
    "option 4 F": false
};

var q2 = {
    "option 1 F": false,
    "option 2 T": true,
    "option 3 F": false,
    "option 4 F": false,
};

var q3 = {
    "option 1 F": false,
    "option 2 T": true,
    "option 3 F": false,
    "option 4 F": false,
};

var q4 = {
    "option 1 F": false,
    "option 2 T": true,
    "option 3 F": false,
    "option 4 F": false,
};

//START button
startBtnEl.addEventListener('click', function() {
        startTimer();
        console.log("button pressed");
    });



//**TIMER** function for 60 second timer initiated by start button
var interval;
var timeGiven = 60;
var secondsElapsed = 0;

function startTimer() {
    timerEl.textContent = timeGiven;
    interval = setInterval(function () {
        secondsElapsed++;
        timerEl.textContent = timeGiven - secondsElapsed;
    }, 1000);
}


//stops timer
function stopTimer() {
    clearInterval(interval);
}


//Begin a FOR loop going through the quiz array, prompting user to select answer for each question


//append answers to score array



//score screen and prompt to insert name for highscore




//pass username and score to highscore local storage