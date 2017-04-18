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
		"question" : "This is question 1", 
		"answer1" : "answer 1", 
		"answer2" : "answer 2",
		"answer3" : "answer 3",
		"answer4" : "answer 4"
	};

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

var question = $("#question");
var opt1 = $("#opt1");
var opt2 = $("#opt2");
var opt3 = $("#opt3");
var opt4 = $("#opt4");

var correctAnswers = 0;
var incorrectAnswers = 0;

var interval1;
var interval2;

var timer = 
{
	"question" : 30,
	"answer" : 6,
}

	function startGame(q)
	{
		question.text(q.question);
		opt1.text(q.answer1);
		opt2.text(q.answer2);
		opt3.text(q.answer3);
		opt4.text(q.answer4);
		valueAssignment(q);
		$("#seconds").html(timer.question);
		questionCountdown();
	}

	function questionCountdown()
	{
		interval1 = setInterval(questionDecrement, 1000);
	}

	function answerCountDown()
	{
		interval2 = setInterval(answerDecrement, 1000);

	}

	function answerDecrement()
	{
		timer.answer--;
		$("#seconds").html(timer.answer);
		if (timer.answer == 0) 
		{
			clearInterval(interval2);
			timer.question = 31;
			questionCountdown();
		}
	}

	function questionDecrement() 
	{
		timer.question--;
		$("#seconds").html(timer.question);
		if (timer.question == 0) 
		{
			// remove opt1, opt2, opt3, opt4
			$(".answer").remove();

			// replace question div with out of time message
			$("#question").before("<h4 id='correction'>test</h4>");
			$("#question").replaceWith('<img src="http://i938.photobucket.com/albums/ad230/JoeTEStrikesBack/th_TimeUp.gif" alt="Wrong Answer" height="200" width="200">');

			clearInterval(interval1);
			// stop counting down.
			answerCountDown();
		}
	}

	function valueAssignment(q)
	{
		opt1.attr("data-value", "correct");
		opt2.attr("data-value", "incorrect");
		opt3.attr("data-value", "incorrect");
		opt4.attr("data-value", "incorrect");
	}

	function runGame()
	{
		$(".answer").on("click", function(){

			if ($(this).attr("data-value") == "correct") 
			{
				alert("correct");
			}

			else if ($(this).attr("data-value") == "incorrect")
			{
				alert("incorrect");
			}
		})
	}
	

	startGame(q1);
	runGame();
	
})

