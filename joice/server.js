console.log("Javascript is loading on the server side");

var mongoose = require('mongoose');

// connect to the mongoose database, `console` collection
mongoose.connect('mongodb://localhost/console');

var greeting = new Question({
	id: _id,
	text: "How are you doing today?",
	answers: ["Great", "Good"]
});
var ready = new Question({
	id: _id,
	text: "Ready to get started?",
	answers: ["Ready!"]
});
var vegetarian = new Question({
	question: "Are you a vegetarian?",
	answers: ["Yes. Vegetarian.", "No. I eat meat. "]
});
var cheese = new Question({
	question: "Do you like cheese?",
	answers: []
});
var time = new Question({
	question: "How much time do you have to cook the meal?",
	answers: []
});

// Or maybe set up schemas for both questions and answers?  many:many neede?

var questionSchema = new Schema({
	question: String,
	answers: [{
		type: Schema.Types.ObjectId,
		ref: 'Answer'
	}]
});

var answerSchema = new Schema({
	answer1: String,
	answer2: String,
	questions: [{
		type: Schema.Types.ObjectId,
		ref: 'Question'
	}]
});

/* Compiling models from the above schemas */
var Question = mongoose.model('Question', questionSchema);
var Answer = mongoose.model('Answer', answerSchema);

// Creating new questions based on the schema //

var greeting2 = new Question({
	question: "How are you doing today?",
	answers: []
});
var ready2 = new Question({
	question: "Sound good?",
	answers: []
});
var vegetarian2 = new Question({
	question: "Are you a vegetarian?",
	answers: []
});
var cheese2 = new Question({
	question: "Do you like cheese?",
	answers: []
});
var time2 = new Question({
	question: "How much time do you have to cook the meal?",
	answers: []
});

// creating new answers based on its schema // 
var greeted = new Answer({
	answer1: "Great",
	answer2: "Good"
});
var readied = new Answer({
	answer1: "Ready!",
});
var vegied = new Answer({
	answer1: "Yep. Vegetarian.",
	answer2: "No. I eat meat."
});
var cheesed = new Answer({
	answer1: "Yes to cheese",
	answer2: "No to cheese"
});
var timed = new Answer({
	answer1: "< than 30 minutes",
	answer2: "> than 30 minutes"
});

// push the answer document into the questions array? //

greeting.save(function(err, taco) {
	if (err) {
		return console.error(err);
	} else console.log(taco);
});
greeted.questions.push(greeting);
greeted.save();

/// draft model

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