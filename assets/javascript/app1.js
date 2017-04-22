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
	var interval;
	var timer = 
	{
		"question" : 30,
		"answer" : 6
	};

	// step 1
	function questionSet(q)
	{
		$("#question").text(q.question);
		$("#opt1").text(q.answer1);
		$("#opt2").text(q.answer2);
		$("#opt3").text(q.answer3);
		$("#opt4").text(q.answer4);
		$("#opt1").attr("data-value", "correct");
		$("#opt2").attr("data-value", "incorrect");
		$("#opt3").attr("data-value", "incorrect");
		$("#opt4").attr("data-value", "incorrect");
		$(".answer").on("click", function(){

			if ($(this).attr("data-value") == "correct") 
			{
				correctAnswers++;
				alert("correct");
				// correctDecrement(z)
			}

			else if ($(this).attr("data-value") == "incorrect")
			{
				incorrectAnswers++;
				countDown(incorrectDecrement);
				// incorrectDecrement()
			}
		})
		$("#seconds").html(timer.question);
	}

	function countDown(x)
	{
		interval = setInterval(x, 1000);
	}

	function questionDecrement()
	{
		timer.question--;
		$("#seconds").html(timer.question);
		if (timer.question === 0) 
		{
			clearInterval(interval);
			timer.question = 30;
		}
	}

	function answerDecrement()
	{
		// remove opt1, opt2, opt3, opt4
		$(".answer").remove();

		// replace question div with out of time message
		$("#question").before("<h4 id='correction'>correct answer is: "+ q1.answer1 +"</h4>");
		$("#question").replaceWith('<img id="image" src="http://i938.photobucket.com/albums/ad230/JoeTEStrikesBack/th_TimeUp.gif" alt="Wrong Answer" height="200" width="200">');
		timer.answer--;
		$("#seconds").html(timer.answer);
		if (timer.answer === 0) 
		{
			clearInterval(interval);
			timer.answer = 6;
			$("#correction").remove();
			$("#image").replaceWith('<h3 id="question"></h3>');
			$(".answer1-col").append('<h2 id="opt1" class="answer"></h2>');
			$(".answer2-col").append('<h2 id="opt2" class="answer"></h2>');
			$(".answer3-col").append('<h2 id="opt3" class="answer"></h2>');
			$(".answer4-col").append('<h2 id="opt4" class="answer"></h2>');
		}
	}

	function incorrectDecrement()
	{
		// remove opt1, opt2, opt3, opt4
		$(".answer").remove();

		// replace question div with out of time message
		$("#question").before("<h4 id='correction'>correct answer is: "+ q1.answer1 +"</h4>");
		$("#question").replaceWith('<img id="image" src="https://media.giphy.com/media/4OJFCEeGzYGs0/giphy.gif">');
		timer.answer--;
		$("#seconds").html(timer.answer);
		if (timer.answer === 0) 
		{
			clearInterval(interval);
			timer.answer = 6;
			$("#correction").remove();
			$("#image").replaceWith('<h3 id="question"></h3>');
			$(".answer1-col").append('<h2 id="opt1" class="answer"></h2>');
			$(".answer2-col").append('<h2 id="opt2" class="answer"></h2>');
			$(".answer3-col").append('<h2 id="opt3" class="answer"></h2>');
			$(".answer4-col").append('<h2 id="opt4" class="answer"></h2>');
		}
	}

	questionSet(q1);
	setTimeout(function(){countDown(questionDecrement)}, 0);
	setTimeout(function(){countDown(answerDecrement)}, 30100);
	// correct decrement
	// incorrect decrement
	setTimeout(function(){questionSet(q2)}, 37000);
	setTimeout(function(){countDown(questionDecrement)}, 37000);
	setTimeout(function(){countDown(answerDecrement)}, 67100);
	setTimeout(function(){questionSet(q3)}, 74000);
	setTimeout(function(){countDown(questionDecrement)}, 74000);
	setTimeout(function(){countDown(answerDecrement)}, 104100);
	setTimeout(function(){questionSet(q4)}, 111200);
	setTimeout(function(){countDown(questionDecrement)}, 111200);
	setTimeout(function(){countDown(answerDecrement)}, 142000);

//////////////////////////////// need to add times up notification
// need to add correct answer logic
	// if correct answer
		// show correct gif 5 seconds
		// go to questionSet(x)
		// need to add correct answers counter
// need to add incorrect answer logic
	// if correct answer
		// show correct gif 5 seconds
		// go to questionSet(x)
		// need to add incorrect answer counter
// need to add end page
	// correct answers
	// incorrect answers
// need to add start button
// need to add question randomizer


})

