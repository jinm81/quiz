var questions = [{
	"question": "How many blue stripes are there on the U.S. flag?",
	"option1": "6",
	"option2": "7",
	"option3": "13",
	"option4": "0",
	"answer": "4"
},
{
	"question": "What is the color of Donald Duck’s bowtie?",
	"option1": "Red",
	"option2": "Yellow",
	"option3": "Blue",
	"option4": "White",
	"answer": "1"
},
{
	"question": "Which country held the 2016 Summer Olympics?",
	"option1": "China",
	"option2": "Ireland",
	"option3": "Brazil",
	"option4": "Italy",
	"answer": "3"
},
{
	"question": "hich planet is the hottest?",
	"option1": "Venus",
	"option2": "Saturn",
	"option3": "Mercury",
	"option4": "Mars",
	"answer": "1"
},
{
	"question": "How many rings are there in the Olympic symbol?",
	"option1": "5",
	"option2": "7",
	"option3": "4",
	"option4": "9",
	"answer": "1"
}];

var timeLeft = 60;
function startTime() {
    timerInterval = setInterval(function() {
		timeLeft--;
		console.log(timeLeft)
        timeEl.textContent = timeLeft + " sec Remaining";
        if(timeLeft < 0) {
            clearInterval(timerInterval);
            endMessage();
        }
     }, 1000);
}
startTime();
var timeEl = document.getElementById("time");
timeEl.textContent = timeLeft + "sec Remaining";
timeEl.innerHTML = timeLeft;

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if (!selectedOption) {
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if (questions[currentQuestion].answer == answer) {
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if (currentQuestion == totQuestions - 1) {
		nextButton.textContent = 'Finish';
	}
	if (currentQuestion == totQuestions) {
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);