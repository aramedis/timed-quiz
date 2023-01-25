//list all elements we will be monitoring
var startBtnEl = document.querySelector("#startBtn");
var timerEl = document.querySelector(".timer");
var qTitle = document.querySelector("#question-title");
var qChoices = document.querySelector(".choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var submitScore = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");



//START button
startBtnEl.addEventListener('click', function() {
        startBtnEl.setAttribute("class", "hide");
        startTimer();
        console.log("button pressed");
        addButtons();
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

var qtitle = questions[0][1];
console.log("test", qtitle);


//append answers to score array
var userAnswers = [];
var i = 0;
var j = 0;
var question = questions[i][1];
var questionKeys = Object.keys(question);
var questionLength = questionKeys.length;
function addButtons() {
    
    //wipe childs of choices <div> - need to do this to delete previous question buttons
    while (qChoices.firstChild) {
        qChoices.removeChild(qChoices.firstChild);
      }

    //create H2 Title element with Question Title - questions[i][0]
    var h2El = document.createElement("h2");
    h2El.textContent = questions[i][0];
    qChoices.appendChild(h2El)

    //loop through questions[i][1] and list the keys of each objects
    for (j = 0; j < questionLength; j++) {
        var button = document.createElement('button');
        button.innerHTML = questionKeys[j];
        
        //on buttonclick record true/false value of answer in userAnswers array and subtract 10 second time
        button.onclick = function() {
        userAnswers.push(question[this.innerHTML]);
            if (question[this.innerHTML] === false) {
                secondsElapsed +=10
            };


        //question button creation loop
        i++;
        if (i < questions.length) {
            question = questions[i][1];
            questionKeys = Object.keys(question);
            questionLength = questionKeys.length;
            addButtons();
        } else {
            //test console log of userAnswers
            console.log(userAnswers);
            
            //hide and show various elements on end of quiz
            qChoices.setAttribute("class", "hide");
            endScreen.setAttribute("class", "show");

            //Calculate Score
            var score = 0
            userAnswers.forEach(element => {
                if (element) {
                    score++
                }
            });

            //turn score into percentage
            let scoreCalc = score / userAnswers.length * 100 + "%" ;

            finalScore.textContent = scoreCalc
        }
        };
        qChoices.appendChild(button);
    }
}



//score screen and prompt to insert name for highscore
initialsEl.addEventListener('input', function(){
    initials = initialsEl.value
})

submitScore.addEventListener('click', writeHighScore);
function writeHighScore() {
    console.log("The initials for high score is "+ initials);
    setScore();
}


//pass username and score to highscore local storage
// Updates score on highscore and sets highscore to client storage
function setScore() {
    localStorage.setItem("initials", scoreCalc);
  }

////HIGHSCORE - The init function is called when the page loads
function init() {
    getScore();
  }

function getScore() {
  // Get stored value from client storage, if it exists
  var storedScore = localStorage.getItem("initials");
} 

init();