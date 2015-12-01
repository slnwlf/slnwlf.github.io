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

	var $divClone = $('#quiz-container').clone();

	var $profile = $('<div class="icon"><img id="joice" src="images/joice-chat.png"></div>');
	var $greeting = $('<div class="text"><p>How are you doing today?</p></div>');
	var $vegetarian = $('<p>Are you a vegetarian?</p>');
	var $cheese = $('<p>Do you like cheese?</p>');
	var $time = $('<p>How much time do you have to prepare the meal?</p>');
	var $solution = $('<p>This recipe looks delicious.  What do you think?</p>');

	var $beginbtn = $('<button type="button" id="begin" class="btn btn-primary">Ready!</button>');
	
	var $greatbtn = $('<button type="button" id="great" class="btn btn-primary">Great</button>');
	var $goodbtn = $('<button type="button" id="good" class="btn btn-primary">Good</button>');

	var $yesVege = $('<button type="button" id="yes" class="btn btn-primary">Yes</button>');
	var $noVege = $('<button type="button" id="no" class="btn btn-primary">No</button>');

	var $yesCheese = $('<button type="button" id="yesToCheese" class="btn btn-primary">Yes to cheese</button>');
	var $noCheese = $('<button type="button" id="noToCheese" class="btn btn-primary">No to cheese</button>');

	var $lessThirty = $('<button type="button" id="lessThanThirty" class="btn btn-primary">Less than 30 min</button>');
	var $moreThirty = $('<button type="button" id="moreThanThirty" class="btn btn-primary">More than 30 min</button>');

	var $zucchini = $('<img src="images/zucchini.jpg">');
	var $likeButton = $('<button type="button" id="like" class="btn btn-default">Like</button>');
	var $likedButton = $('<button type="button" id="like" class="btn btn-primary">Like</button>');

	var $resetButton = $('<button type="button" id="like" class="btn btn-primary">Reset</button>');
	// var currentQuestion = 0;
	// var selections = [];
	// var survey = $('#question');

	// displayNext();

	// Click handler to start the quiz

	$("#begin").click(function() {
		$("#div2").html($beginbtn);
		$("#icon3").html($profile);
		$("#text3").html($greeting);
		$("#left").html($greatbtn);
		$("#right").html($goodbtn);

	});
	$greatbtn.click(function() {
		console.log("great was clicked!");
		$("#div4").html($greatbtn);
		$("#icon5").html($profile);
		$("#text5").html($vegetarian);
		$("#left").empty();
		$("#right").empty();
		$("#left").html($yesVege);
		$("#right").html($noVege);

	});
	$goodbtn.click(function() {
		console.log("good was clicked!");
		$("#div4").html($goodbtn);
		$("#div5").html($vegetarian);
		$("#left").html($yesVege);
		$("#right").html($noVege);
		$("#div3").empty();
		$("#div2").empty();
	});
	$yesVege.click(function() {
		$("#div6").html(cheese);
		$("#yesToCheese").html($yesCheese);
		$("#noToCheese").html($noCheese);
		$("#div4").empty();
		$("#div5").empty();
	});
	$noVege.click(function() {
		$("#div6").html(cheese);
		$("#left").html($yesCheese);
		$("#right").html($noCheese);
		$("#div4").empty();
		$("#div5").empty();
	});
	$yesCheese.click(function() {
		$("#div8").html(time);
		$("#left").html($lessThirty);
		$("#right").html($moreThirty);
		$("#div6").empty();
		$("#div7").empty();
	});
	$noCheese.click(function() {
		$("#div8").html(time);
		$("#left").html($lessThirty);
		$("#right").html($moreThirty);
		$("#div6").empty();
		$("#div7").empty();
	});
	$moreThirty.click(function() {
		$("#div11").html(solution);
		$("#div10").html($zucchini);
		$("#left").html($likeButton);
		$("#right").html($resetButton);
		$("#div8").empty();
		$("#div9").empty();
	});
	$lessThirty.click(function() {
		$("#div11").html(solution);
		$("#div10").html($zucchini);
		$("#left").html($likeButton);
		$("#right").html($resetButton);
		$("#div8").empty();
		$("#div9").empty();
	});
	$likeButton.click(function() {
		$("#like").html($likedButton);
	});
	// reset entire document
	$resetButton.click(function() {
		console.log("the reset button was selected");
		// $("#quiz-container").replaceWith($divClone.clone());
		$("#quiz-container").replaceWith($divClone);
		// Not sure why the rest button doesn't really work
	});

});