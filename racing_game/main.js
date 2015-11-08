$(function() {
	// make sure document is loaded before running js

	console.log("Javascript is working!");
	// checking that JS file is attached to HTML 

	var $box1 = $('#box1');
	$(document).keydown(function(e) {
		switch (e.which) {
			case 37:
				$box1.css('left', $box1.offset().left - 10);
				break;
			case 38:
				$box1.css('top', $box1.offset().top - 10);
				break;
			case 39:
				$box1.css('left', $box1.offset().left + 10);
				break;
			case 40:
				$box1.css('top', $box1.offset().top + 10);
				break;
		}
	});
	var $box2 = $('#box2');
	$(document).keydown(function(e) {
		switch (e.which) {
			case 70:
				$box2.css('left', $box2.offset().left - 10);
				break;
			case 84:
				$box2.css('top', $box2.offset().top - 10);
				break;
			case 72:
				$box2.css('left', $box2.offset().left + 10);
				break;
			case 71:
				$box2.css('top', $box2.offset().top + 10);
				break;
		}
	});
});