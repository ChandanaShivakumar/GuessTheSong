
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
    if(this.questionIndex==0){
        this.score++;
    }
    else if(this.questionIndex==1){
        this.score=this.score+2;
    }
    else if(this.questionIndex==2){
        this.score=this.score+3;
    }
    else if(this.questionIndex==3){
        this.score=this.score+4;
    }
    else if(this.questionIndex==4){
        this.score=this.score+5;
    }
    else if(this.questionIndex==5){
        this.score=this.score+10;
    }
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("c" + i);
            element.innerHTML = choices[i];
            guess("b" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> You Scored: " + quiz.score + "!!</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    var refresh = document.createElement("button");
    refresh.innerHTML = "Try Again!!";
    var button = document.getElementById("load");
    button.appendChild(refresh); 
    refresh.id="refresh";
    refresh.addEventListener ("click", function() {
        refreshPage();
      });
    
};

function refreshPage(){
    location.reload();
} 



var questions = [
    new Question("(1 Point!)''So it's gonna be forever Or it's gonna go down in flames You can tell me when it's over, mmh If the high was worth the pain''", ["Raise me up- West Life", "Blank Space- Taylor Swift","Life goes on- BTS", "Bad Guy- Billie Eilish"], "Blank Space- Taylor Swift"),
    new Question("(2 Point!)''So wake me up when it's all over When I'm wiser and I'm older All this time I was finding myself And I didn't know I was lost''", ["We are Warriors- Avril Lavigne", "King- Lauren Aquilina", "Willow- Taylor Swift", "Wake me up- Avicii"], "Wake me up- Avicii"),
    new Question("(3 Point!)''Thought I found a way Thought I found a way, out (found) But you never go away (never go away) So I guess I gotta stay now'' ", ["Sorry- Justin Bieber", "Lonely- Billie Eilish, Khalid","Side to Side- Ariana Grande", "Stitches- Shawn Mendez"], "Lonely- Billie Eilish, Khalid"),
    new Question("(4 Point!!)''Do you ever feel already buried deep? Six feet under screams, but no one seems to hear a thing Do you know that there's still a chance for you? \nCause there's a spark in you''", ["Fireworks- Katy Perry", "Youngblood- 5SOS", "Raise me up- West Life", "My Heart Will Go On- Celine Dion"], "Fireworks- Katy Perry"),
    new Question("(5 Point!!)''Every night in my dreams I see you, I feel you That is how I know you go on Far across the distance And spaces between us You have come to show you go on''", ["I'm Alive- Celine Dion", "Ashes- Celine Dion", "My Heart Will Go On- Celine Dion", "Incredible- Celine Dion"], "My Heart Will Go On- Celine Dion"),
    new Question("(10 Point!!!)''Cause I-I-I'm in the stars tonight So watch me bring the fire and set the night alight (hey) Shining through the city with a little funk and soul''", ["We are Warriors- Avril Lavigne''", "King- Lauren Aquilina", "Dynamite- BTS", "Fireworks- Katy Perry"], "Dynamite- BTS")
];

var quiz = new Quiz(questions);
populate();