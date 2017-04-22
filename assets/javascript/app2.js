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
		"answer" : 5
 	};
 	var timeOutQuestion;
 	var timeOutAnswer;

	function questionSet1(q)
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
		timeOutQuestion = setTimeout(countDown(questionDecrement1), 5000);

		$(".answer").on("click", function(){

			if ($(this).attr("data-value") == "correct") 
			{
				correctAnswers++;
				clearInterval(interval);
				// alert("correct");
				correctScreen1();
				// correctDecrement(z)
			}

			else if ($(this).attr("data-value") == "incorrect")
			{
				incorrectAnswers++;
				clearInterval(interval);
				incorrectScreen1();
			}
		})
	}

	function questionSet2(q)
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
		timeOutQuestion = setTimeout(countDown(questionDecrement2), 5000);

		$(".answer").on("click", function(){

			if ($(this).attr("data-value") == "correct") 
			{
				correctAnswers++;
				clearInterval(interval);
				// alert("correct");
				correctScreen2();
				// correctDecrement(z)
			}

			else if ($(this).attr("data-value") == "incorrect")
			{
				incorrectAnswers++;
				clearInterval(interval);
				incorrectScreen2();
			}
		})
	}

	function questionSet3(q)
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
		timeOutQuestion = setTimeout(countDown(questionDecrement3), 5000);

		$(".answer").on("click", function(){

			if ($(this).attr("data-value") == "correct") 
			{
				correctAnswers++;
				clearInterval(interval);
				// alert("correct");
				correctScreen3();
				// correctDecrement(z)
			}

			else if ($(this).attr("data-value") == "incorrect")
			{
				incorrectAnswers++;
				clearInterval(interval);
				incorrectScreen3();
			}
		})
	}

	function questionSet4(q)
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
		timeOutQuestion = setTimeout(countDown(questionDecrement4), 5000);

		$(".answer").on("click", function(){

			if ($(this).attr("data-value") == "correct") 
			{
				correctAnswers++;
				clearInterval(interval);
				// alert("correct");
				correctScreen4();
				// correctDecrement(z)
			}

			else if ($(this).attr("data-value") == "incorrect")
			{
				incorrectAnswers++;
				clearInterval(interval);
				incorrectScreen4();
			}
		})
	}

	function timeUpScreen1(){
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>correct answer is: "+ q1.answer1 +"</h4>");
		$("#question").replaceWith('<img id="image" src="http://i938.photobucket.com/albums/ad230/JoeTEStrikesBack/th_TimeUp.gif" alt="Wrong Answer" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement1), 5000);
	}

	function correctScreen1() {
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>'Correct'</h4>");
		$("#question").replaceWith('<img id="image" src="https://media4.giphy.com/media/woJp5MBY5tK8M/giphy.gif" alt="correct" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement1), 5000);
	}

	function incorrectScreen1() {
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>'Incorrect'</h4>");
		$("#question").replaceWith('<img id="image" src="https://media.giphy.com/media/4OJFCEeGzYGs0/giphy.gif" alt="Incorrect" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement1), 5000);
	}

	function timeUpScreen2(){
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>correct answer is: "+ q1.answer1 +"</h4>");
		$("#question").replaceWith('<img id="image" src="http://i938.photobucket.com/albums/ad230/JoeTEStrikesBack/th_TimeUp.gif" alt="Wrong Answer" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement2), 5000);
	}

	function correctScreen2() {
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>'Correct'</h4>");
		$("#question").replaceWith('<img id="image" src="https://media4.giphy.com/media/woJp5MBY5tK8M/giphy.gif" alt="correct" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement2), 5000);
	}

	function incorrectScreen2() {
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>'Incorrect'</h4>");
		$("#question").replaceWith('<img id="image" src="https://media.giphy.com/media/4OJFCEeGzYGs0/giphy.gif" alt="Incorrect" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement2), 5000);
	}

		function timeUpScreen3(){
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>correct answer is: "+ q1.answer1 +"</h4>");
		$("#question").replaceWith('<img id="image" src="http://i938.photobucket.com/albums/ad230/JoeTEStrikesBack/th_TimeUp.gif" alt="Wrong Answer" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement3), 5000);
	}

	function correctScreen3() {
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>'Correct'</h4>");
		$("#question").replaceWith('<img id="image" src="https://media4.giphy.com/media/woJp5MBY5tK8M/giphy.gif" alt="correct" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement3), 5000);
	}

	function incorrectScreen3() {
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>'Incorrect'</h4>");
		$("#question").replaceWith('<img id="image" src="https://media.giphy.com/media/4OJFCEeGzYGs0/giphy.gif" alt="Incorrect" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement3), 5000);
	}

	function timeUpScreen4(){
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>correct answer is: "+ q1.answer1 +"</h4>");
		$("#question").replaceWith('<img id="image" src="http://i938.photobucket.com/albums/ad230/JoeTEStrikesBack/th_TimeUp.gif" alt="Wrong Answer" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement4), 5000);
	}

	function correctScreen4() {
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>'Correct'</h4>");
		$("#question").replaceWith('<img id="image" src="https://media4.giphy.com/media/woJp5MBY5tK8M/giphy.gif" alt="correct" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement4), 5000);
	}

	function incorrectScreen4() {
		timer.answer = 5;
		$(".answer").remove();
		$("#question").before("<h4 id='correction'>'Incorrect'</h4>");
		$("#question").replaceWith('<img id="image" src="https://media.giphy.com/media/4OJFCEeGzYGs0/giphy.gif" alt="Incorrect" height="200" width="200">');
		$("#seconds").html(timer.answer);
		timeOutAnswer = setTimeout(countDown(answerDecrement4), 5000);
	}

	function countDown(x)
	{
		interval = setInterval(x, 1000);
	}

	function questionDecrement1()
	{
		timer.question--;
		$("#seconds").html(timer.question);
		if (timer.question == 0) {
			clearInterval(interval);
			setTimeout(timeUpScreen1, 1000);
			incorrectAnswers++;
		}
	}

	function questionDecrement2()
	{
		timer.question--;
		$("#seconds").html(timer.question);
		if (timer.question == 0) {
			clearInterval(interval);
			setTimeout(timeUpScreen2, 1000);
			incorrectAnswers++;
		}
	}

	function questionDecrement3()
	{
		timer.question--;
		$("#seconds").html(timer.question);
		if (timer.question == 0) {
			clearInterval(interval);
			setTimeout(timeUpScreen3, 1000);
			incorrectAnswers++;
		}
	}

	function questionDecrement4()
	{
		timer.question--;
		$("#seconds").html(timer.question);
		if (timer.question == 0) {
			clearInterval(interval);
			setTimeout(timeUpScreen4, 1000);
			incorrectAnswers++;
		}
	}

	function answerDecrement1(){
		timer.answer--;
		$("#seconds").html(timer.answer);
		if (timer.answer == -1) {
			clearInterval(interval);
			$("#correction").remove();
			$("#image").replaceWith('<h3 id="question"></h3>');
			$(".answer1-col").append('<h2 id="opt1" class="answer"></h2>');
			$(".answer2-col").append('<h2 id="opt2" class="answer"></h2>');
			$(".answer3-col").append('<h2 id="opt3" class="answer"></h2>');
			$(".answer4-col").append('<h2 id="opt4" class="answer"></h2>');
			timer.question = 5;
			questionSet2(q2);
		}
	}

	function answerDecrement2(){
		timer.answer--;
		$("#seconds").html(timer.answer);
		if (timer.answer == -1) {
			clearInterval(interval);
			$("#correction").remove();
			$("#image").replaceWith('<h3 id="question"></h3>');
			$(".answer1-col").append('<h2 id="opt1" class="answer"></h2>');
			$(".answer2-col").append('<h2 id="opt2" class="answer"></h2>');
			$(".answer3-col").append('<h2 id="opt3" class="answer"></h2>');
			$(".answer4-col").append('<h2 id="opt4" class="answer"></h2>');
			timer.question = 5;
			questionSet3(q3);
		}
	}

	function answerDecrement3(){
		timer.answer--;
		$("#seconds").html(timer.answer);
		if (timer.answer == -1) {
			clearInterval(interval);
			$("#correction").remove();
			$("#image").replaceWith('<h3 id="question"></h3>');
			$(".answer1-col").append('<h2 id="opt1" class="answer"></h2>');
			$(".answer2-col").append('<h2 id="opt2" class="answer"></h2>');
			$(".answer3-col").append('<h2 id="opt3" class="answer"></h2>');
			$(".answer4-col").append('<h2 id="opt4" class="answer"></h2>');
			timer.question = 5;
			questionSet4(q4);
		}
	}

	function answerDecrement4(){
		timer.answer--;
		$("#seconds").html(timer.answer);
		if (timer.answer == 0) {
			clearInterval(interval);
			$("#correction").remove();
			$("#image").replaceWith('<h3 id="question"></h3>');
			$(".answer1-col").append('<h2 id="opt1" class="answer"></h2>');
			$(".answer2-col").append('<h2 id="opt2" class="answer"></h2>');
			$(".answer3-col").append('<h2 id="opt3" class="answer"></h2>');
			$(".answer4-col").append('<h2 id="opt4" class="answer"></h2>');
			timer.question = 5;
			donePage();
		}
	}

	function donePage(){
		$("#opt1").replaceWith('<h2 id="incorrect"></h2>');
		$("#opt2").replaceWith('<h2 id="correct"></h2>');
		$("#incorrect").text("incorrect: " + incorrectAnswers);
		$("#correct").text("correct: " + correctAnswers);
		var newDiv = $("#correct").after("<button class='restart-btn' type='button'>Restart</button>")
		
		$(".restart-btn").on("click", function(){
			incorrectAnswers = 0;
			correctAnswers = 0;
			$("#incorrect").replaceWith('<h2 id="opt1" class="answer"></h2>');
			$("#correct").replaceWith('<h2 id="opt2" class="answer"></h2>');
			$(".restart-btn").remove();
			startGame(q1);
		})
	}



	function startGame(q){
		questionSet1(q);
	}

	startGame(q1);





})
