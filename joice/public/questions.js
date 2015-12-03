function buildQuestionContainer(question) { 
	return '<div class="buttonsection clearfix previousanswer"></div>' +
	'<div class="section clearfix question">' +
	'<div class="profilephoto icon"><img src="images/joice-chat.png"></div>' +
	'<div class="text">' + question.text + '</div>' +
	'</div>';
}

// TODO Add previous button to the buildQuestionContainer function 
// Need to point to the answer.text 

$(document).ready(function() {
	console.log("loading from questions.js");

	$("#begin").on("click", function(event) {
		console.log("begin button was clicked");
		$.get('/api/questions?start=true', function(question) {
			console.log(question);
			var $beginbtn = $("#begin");
			$beginbtn.addClass("btn2");
			var $questionContainer = $(buildQuestionContainer(question));
			$("#quiz-container").append($questionContainer);
		});
	});

});