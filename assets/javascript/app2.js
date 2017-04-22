$(document).ready(function(){
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
	var timeOut;
	var timer = 
	{
		"question" : 5,
		"answer" : 6
 	};

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
		$("#seconds").html(timer.question);
		setTimeout(countDown(decrement), 5000);
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
				alert("incorrect");
			}
		})
	}

	function countDown(x)
	{
		interval = setInterval(x, 1000);
	}

	function decrement()
	{
		timer.question--;
		$("#seconds").html(timer.question);
		if (timer.question == -1) {
			clearInterval(interval);
			timeUpScreen();
			timer.question = 5;
			$("#seconds").html(timer.question);
		}
	}

	function timeUpScreen(){
			$(".answer").remove();
			$("#question").before("<h4 id='correction'>correct answer is: "+ q1.answer1 +"</h4>");
			$("#question").replaceWith('<img id="image" src="http://i938.photobucket.com/albums/ad230/JoeTEStrikesBack/th_TimeUp.gif" alt="Wrong Answer" height="200" width="200">');
			setTimeout(countDown(decrement), 5000);
			timer.question--;
			$("#seconds").html(timer.question);
			if (timer.question == 0) {
				clearInterval(interval);
			}
	}

	function startGame(q){
		questionSet(q);
	}

	startGame(q1);





})
