/*
You'll create a trivia game that shows 
only one question until the player 
answers it or their time runs out.

If the player selects the correct 
answer, show a screen congratulating 
them for choosing the right option. 
After a few seconds, display the next 
question -- do this without user input.

The scenario is similar for wrong 
answers and time-outs.

- If the player runs out of time, tell 
	the player that time's up and display 
	the correct answer. Wait a few seconds, 
	then show the next question.
- If the player chooses the wrong answer, 
	tell the player they selected the wrong 
	option and then display the correct answer. 
	Wait a few seconds, then show the next question.

On the final screen, show the number of 
correct answers, incorrect answers, and an 
option to restart the game 
(without reloading the page).
*/

$(document).ready(function()
{
	var q1 = 
	{
		"question" : "question 1", 
		"answer1" : "answer 1", 
		"answer2" : "answer 2",
		"answer3" : "answer 3",
		"answer4" : "answer 4"
	};

	console.log(q1.question);
	console.log(q1.answer1);
	console.log(q1.answer2);
	console.log(q1.answer3);
	console.log(q1.answer4);

var q2 = 
	{
		"question" : "question 2", 
		"answer1" : "answer 1", 
		"answer2" : "answer 2",
		"answer3" : "answer 3",
		"answer4" : "answer 4"
	};

var q3 = 
	{
		"question" : "question 3", 
		"answer1" : "answer 1", 
		"answer2" : "answer 2",
		"answer3" : "answer 3",
		"answer4" : "answer 4"
	};

var q4 = 
	{
		"question" : "question 4", 
		"answer1" : "answer 1", 
		"answer2" : "answer 2",
		"answer3" : "answer 3",
		"answer4" : "answer 4"
	};

var questionCounter = 30;
var answerCounter = 5;

	function startGame()
	{
		$("#question").text(q1.question);
		$("#opt1").text(q1.answer1);
		$("#opt2").text(q1.answer2);
		$("#opt3").text(q1.answer3);
		$("#opt4").text(q1.answer4);
		setTimeout($("#seconds").text(questionCounter);
		
	}

	function runGame(){

	}

	startGame();
})

//objects
