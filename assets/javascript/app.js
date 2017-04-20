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

	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var interval1;
	var interval2;
	var timer = 
	{
		"question" : 30,
		"answer" : 6,
	}

	// step 1
	function startGame(q)
	{
		$("#question").text(q.question);
		$("#opt1").text(q.answer1);
		$("#opt2").text(q.answer2);
		$("#opt3").text(q.answer3);
		$("#opt4").text(q.answer4);
		valueAssignment(q);
		$("#seconds").html(timer.question);
		questionCountdown();
	}

	function questionCountdown()
	{
		interval1 = setInterval(questionDecrement, 1000);
	}

	function questionCountdown2()
	{
		interval1 = setInterval(questionDecrement, 1000);
	}

	function answerCountDown()
	{
		interval2 = setInterval(answerDecrement, 1000);

	}

	// step 3
	function answerDecrement()
	{
		timer.answer--;
		$("#seconds").html(timer.answer);
		if (timer.answer == 0) 
		{
			clearInterval(interval2);
			timer.question = 31;
			questionCountdown2();
			newQuestion(q2);
			runGame();
		}
	}

	// step 2
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
			$("#question").replaceWith('<img id="image" src="http://i938.photobucket.com/albums/ad230/JoeTEStrikesBack/th_TimeUp.gif" alt="Wrong Answer" height="200" width="200">');

			clearInterval(interval1);
			timer.answer = 6;
			// stop counting down.
			answerCountDown();
		}
	}

	// step 4
	function newQuestion(x) 
	{
		$("#correction").remove();
		$("#image").replaceWith('<h3 id="question">question test</h3>');
		$(".answer1-col").append('<h2 id="opt1" class="answer">opt1</h2>');
		$(".answer2-col").append('<h2 id="opt2" class="answer">opt1</h2>');
		$(".answer3-col").append('<h2 id="opt3" class="answer">opt1</h2>');
		$(".answer4-col").append('<h2 id="opt4" class="answer">opt1</h2>');
		$("#question").text(x.question);
		$("#opt1").text(x.answer1);
		$("#opt2").text(x.answer2);
		$("#opt3").text(x.answer3);
		$("#opt4").text(x.answer4);
		$("#opt1").attr("data-value", "correct");
		$("#opt2").attr("data-value", "incorrect");
		$("#opt3").attr("data-value", "incorrect");
		$("#opt4").attr("data-value", "incorrect");
		answerDecrement2();
	}

	function answerDecrement2()
	{
		timer.answer--;
		$("#seconds").html(timer.answer);
		if (timer.answer == 0) 
		{
			clearInterval(interval2);
			timer.question = 31;
			questionCountdown();
			newQuestion(q3);
			runGame();
		}
	}

	function valueAssignment(q)
	{
		$("#opt1").attr("data-value", "correct");
		$("#opt2").attr("data-value", "incorrect");
		$("#opt3").attr("data-value", "incorrect");
		$("#opt4").attr("data-value", "incorrect");
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

