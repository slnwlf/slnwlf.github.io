$(function() {
	console.log("Jquery is loading!");

	// Buttons and text strings

	var profile = ('<div class="icon"><img src="images/joice-chat.png"></div>');

	var $greeting = $('<div class="text"><p>Happy to help. How are you doing today?</p></div>');
	var $vegetarian = $('<div class="text"><p>Are you a vegetarian?</p></div>');
	var $cheese = $('<div class="text"><p>Do you like cheese?</p></div>');
	var $time = $('<div class="text"><p>How much time do you have to prepare the meal?</p></div>');
	var $solution = $('<div class="text"><p>This recipe looks delicious.  What do you think?</p></div>');

	var $beginbtn = $('<button type="button" id="begin" class="btn btn-primary">Ready!</button>');
	
	var $greatbtn = $('<button type="button" id="great" class="btn btn-primary">Great</button>');
	var $goodbtn = $('<button type="button" id="good" class="btn btn-primary">Good</button>');

	var $yesVege = $('<div><button type="button" id="yes" class="btn btn-primary">Yes.  Vegetarian</button></div>');
	var $noVege = $('<div><button type="button" id="no" class="btn btn-primary">No.  I eat meat</button></div>');

	var $yesCheese = $('<div><button type="button" id="yesToCheese" class="btn btn-primary">Yes to cheese</button></div>');
	var $noCheese = $('<div><button type="button" id="noToCheese" class="btn btn-primary">No to cheese</button></div>');

	var $lessThirty = $('<div><button type="button" id="lessThanThirty" class="btn btn-primary">Less than 30 min</button></div>');
	var $moreThirty = $('<div><button type="button" id="moreThanThirty" class="btn btn-primary">More than 30 min</button></div>');

	var $beginbtn2 = $('<button type="button" id="begin" class="btn btn-primary btn2">Ready!</button>');

	var $greatbtn2 = $('<button type="button" id="great" class="btn btn-primary btn2">Great</button>');
	var $goodbtn2 = $('<button type="button" id="good" class="btn btn-primary btn2">Good</button>');

	var $yesVege2 = $('<div><button type="button" id="yes" class="btn btn-primary btn2">Yes.  Vegetarian</button></div>');
	var $noVege2 = $('<div><button type="button" id="no" class="btn btn-primary btn2">No.  I eat meat</button></div>');

	var $yesCheese2 = $('<div><button type="button" id="yesToCheese" class="btn btn-primary btn2">Yes to cheese</button></div>');
	var $noCheese2 = $('<div><button type="button" id="noToCheese" class="btn btn-primary btn2">No to cheese</button></div>');

	var $lessThirty2 = $('<div><button type="button" id="lessThanThirty" class="btn btn-primary btn2">Less than 30 min</button></div>');
	var $moreThirty2 = $('<div><button type="button" id="moreThanThirty" class="btn btn-primary btn2">More than 30 min</button></div>');

	var $zucchini = $('<img class="solution" src="images/zucchini.jpg">');
	var $eggplant = $('<img class="solution" src="images/eggplant.jpg">');
	var $fajitas = $('<img class="solution" src="images/fajitas.jpg">');

	var $likeButton = $('<button type="button" id="like" class="btn btn-default">Like</button>');
	var $likedButton = $('<button type="button" id="like" class="btn btn-primary">Like</button>');

	var $moreButton = $('<button type="button" class="btn btn-primary">More</button>');
	var $moreButton2 = $('<button type="button" class="btn btn-primary">More</button>');
 

	// Click handler to start the quiz

	$("#begin").click(function() {
		$("#div2").html($beginbtn2);
		$("#profile3").html(profile);
		$("#text3").html($greeting);
		$("#left").html($greatbtn);
		$("#right").html($goodbtn);

	});

	$goodbtn.click(function() {
		$("#div4").html($goodbtn2);
		$("#profile5").html(profile);
		$("#text5").html($vegetarian);
		$("#left").empty();
		$("#right").empty();
		$("#left").html($yesVege);
		$("#right").html($noVege);

	});
	$greatbtn.click(function() {
		$("#div4").html($greatbtn2);
		$("#text5").html($vegetarian);
		$("#left").empty();
		$("#right").empty();
		$("#profile5").html(profile);
		$("#left").html($yesVege);
		$("#right").html($noVege);

	});

	$yesVege.click(function() {
		$("#text7").html($cheese);
		$("#profile7").html(profile);
		$("#div6").html($yesVege2);
		$("#left").empty();
		$("#right").empty();
		$("#left").html($yesCheese);
		$("#right").html($noCheese);

	});
	$noVege.click(function() {
		$("#text7").html($cheese);
		$("#div6").html($noVege2);
		$("#profile7").html(profile);
		$("#text7").html($cheese);
		$("#left").empty();
		$("#right").empty();
		$("#left").html($yesCheese);
		$("#right").html($noCheese);

	});
	$yesCheese.click(function() {
		// $("#div9").html($time);
		$("#div8").html($yesCheese2);
		$("#profile9").html(profile);
		$("#text9").html($time);
		$("#left").empty();
		$("#right").empty();
		$("#left").html($lessThirty);
		$("#right").html($moreThirty);

	});
	$noCheese.click(function() {
		// $("#div9").html($time);
		$("#div8").html($noCheese2);
		$("#profile9").html(profile);
		$("#text9").html($time);
		$("#left").empty();
		$("#right").empty();
		$("#left").html($lessThirty);
		$("#right").html($moreThirty);

	});
	$moreThirty.click(function() {
		// $("#div11").html($solution);
		$("#div10").html($moreThirty2);
		$("#profile11").html(profile);
		$("#text11").html($solution);
		$("#div12").html($zucchini);
		$("#left").empty();
		$("#right").empty();
		$("#left").html($likeButton);
		$("#right").html($moreButton);

	});
	$lessThirty.click(function() {
		// $("#div11").html($solution);
		$("#div10").html($lessThirty2);
		$("#profile11").html(profile);
		$("#text11").html($solution);
		$("#div12").html($zucchini);
		$("#left").empty();
		$("#right").empty();
		$("#left").html($likeButton);
		$("#right").html($moreButton);

	});
	// $likeButton.click(function() {
	// 	$("#like").html($likedButton);
	// });
	// more button
	$moreButton.click(function() {
		$("#div12").html($fajitas);
		$("#right").empty();
		$("#right").html($moreButton2);
	});
	$moreButton2.click(function() {
		$("#div12").html($eggplant);
		$("#right").empty();
		$("#right").html($moreButton);
	});

});