$(document).ready(function() {
	// make sure document is loaded before running js

	console.log("Javascript is working!");
	// checking that JS file is attached to HTML 

	// use event handlers to make the two race cars moveable with a keypress
	var $box1 = $('#box1');
	$(document).keydown(function(e) {
		switch (e.which) {
			case 37:
				$box1.css('left', $box1.offset().left - 10);
				break;
				//    case 38:
				// 	$box1.css('top', $box1.offset().top - 10);
				// 	break;
			case 39:
				$box1.css('left', $box1.offset().left + 10);
				break;
				// case 40:
				// 	$box1.css('top', $box1.offset().top + 10);
				// 	break;
		}
	});
	var $box2 = $('#box2');
	$(document).keydown(function(e) {
		switch (e.which) {
			case 70:
				$box2.css('left', $box2.offset().left - 10);
				break;
				// case 84:
				// 	$box2.css('top', $box2.offset().top - 10);
				// 	break;
			case 72:
				$box2.css('left', $box2.offset().left + 10);
				break;
				// case 71:
				// 	$box2.css('top', $box2.offset().top + 10);
				// 	break;
		}
	});
	// Setting up 'collision rules' which was very difficult.
	// The main problem is that they are independent and override each other, so only the lower function (for yellow car) triggers a win result. 
	var $redcar = box1;
	var $finishline = ('.finishline');

	function Collision($redcar, $finishline) {
		var x1 = $redcar.offset().left;
		var y1 = $redcar.offset().top;
		var h1 = $redcar.outerHeight(true);
		var w1 = $redcar.outerWidth(true);
		var b1 = y1 + h1;
		var r1 = x1 + w1;
		var x2 = $finishline.offset().left;
		var y2 = $finishline.offset().top;
		var h2 = $finishline.outerHeight(true);
		var w2 = $finishline.outerWidth(true);
		var b2 = y2 + h2;
		var r2 = x2 + w2;

		if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return "Go, go go!";
		return "The red car wins!";
	}

	window.setInterval(function() {
		$('#winner').text(Collision($($redcar), $($finishline)));
	}, 200);

	var $yellowcar = box2;

	function Collisionyellow($yellowcar, $finishline) {
		var x1 = $yellowcar.offset().left;
		var y1 = $yellowcar.offset().top;
		var h1 = $yellowcar.outerHeight(true);
		var w1 = $yellowcar.outerWidth(true);
		var b1 = y1 + h1;
		var r1 = x1 + w1;
		var x2 = $finishline.offset().left;
		var y2 = $finishline.offset().top;
		var h2 = $finishline.outerHeight(true);
		var w2 = $finishline.outerWidth(true);
		var b2 = y2 + h2;
		var r2 = x2 + w2;

		if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return "Go, go go!";
		return "The yellow car wins!";
	}

	window.setInterval(function() {
		$('#winner').text(Collisionyellow($($yellowcar), $($finishline)));
	}, 200);


	// Resest button moves the cars back to a fixed position, but it doesn't technically reset the game. 
	$('.resetbutton').on('click', function() {
		$('#box1').css("left", "340px");
		$('#box2').css("left", "340px");
	});
});