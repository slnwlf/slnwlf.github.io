$(function() {
	console.log("Jquery is loading!");

	// Test surveyurvey test via prompts

	var questions = [{
		question: "How are you doing today?",
		choices: ["good", "great"]
	}, {
		question: "I'll ask you a few questions in order to make a recipe recommendation.  Sound good?",
		choices: ["yep"]
	}, {
		question: "Are you a vegetarian?",
		choices: ["yes", "no"]
	}, {
		question: "Do you like cheese?",
		choices: ["yes", "no"]
	}, {
		question: "How much time do you have to prepare the meal?",
		choices: ["<30 minutes", ">30 minutes"]
	}, {
		question: "Thanks for all the information.  Are you ready for a recommendation?",
		choices: ["Yep!"]
	}];

	var greeting = "How are you doing today?";
	var vegetarian = "Are you a vegetarian?";

	var $greatbtn = $('<button type="button" id="great" class="btn btn-default">Great</button>');
    var $goodbtn = $('<button type="button" id="good" class="btn btn-default">Good</button>');

    var $yesVege = $('<button type="button" id="yes" class="btn btn-default">Yes</button>');
    var $noVege = $('<button type="button" id="no" class="btn btn-default">No</button>');
	// var currentQuestion = 0;
	// var selections = [];
	// var survey = $('#question');

	// displayNext();

// Click handler to start the quiz

$("#startquiz").click(function() {
	$("#div2").text(greeting);
	$("#great").html($greatbtn);
	$("#good").html($goodbtn);
	$("#div1").empty();

});
$("#great").click(function() {
	$("#div4").text(vegetarian);
	$("#yes").html($yesVege);
	$("#no").html($noVege);
	$("#div3").empty();
	$("#div2").empty();


});


});