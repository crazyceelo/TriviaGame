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
				alert("correct");
			}

			else if ($(this).attr("data-value") == "incorrect")
			{
				alert("incorrect");
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
		timer.answer--;
		$("#seconds").html(timer.answer);
		if (timer.answer === 0) 
		{
			clearInterval(interval);
			timer.answer = 6;
		}
	}

	questionSet(q1);
	setTimeout(function(){countDown(questionDecrement)}, 0);
	setTimeout(function(){countDown(answerDecrement)}, 30100);
	setTimeout(function(){questionSet(q2)}, 37000);
	setTimeout(function(){countDown(questionDecrement)}, 37000);
	setTimeout(function(){countDown(answerDecrement)}, 67100);
	setTimeout(function(){questionSet(q3)}, 74000);
	setTimeout(function(){countDown(questionDecrement)}, 74000);
	setTimeout(function(){countDown(answerDecrement)}, 104100);
	setTimeout(function(){questionSet(q4)}, 111200);
	setTimeout(function(){countDown(questionDecrement)}, 111200);
	setTimeout(function(){countDown(answerDecrement)}, 142000);

})

