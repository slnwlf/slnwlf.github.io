// Create a tree that has questions pointing to other questions
console.log("dbTreeTest script file is running.");

var mongoose = require('mongoose');
console.log("connecting to Mongo.");
mongoose.connect('mongodb://localhost/relationTest');

var Schema = mongoose.Schema;

// Create question and answer schemas 
var questionSchema = new Schema({
	text: String,
	options: [{
		type: Schema.Types.ObjectId,
		ref: 'Answer'
	}],
	startQuestion: {
		type: Boolean,
		default: false
	}
});
var answerSchema = new Schema({
	text: String,
	nextQuestion: {
		type: Schema.Types.ObjectId,
		ref: 'Question'
	}
});
// Adding models that reference the question and answer schema
var Question = mongoose.model('Question', questionSchema);
var Answer = mongoose.model('Answer', answerSchema);

// Create questions
var greeting = new Question({
	text: "How are you doing today?",
	startQuestion: true
});
var vegetarian = new Question({
	text: "Are you a vegetarian?"
});
var cheese = new Question({
	text: "Do you like cheese?"
});
var time = new Question({
	text: "How much time do you have to prepare the meal?"
});

// Create answers
var greatAnswer = new Answer({
	text: "great",
	nextQuestion: vegetarian
});
var goodAnswer = new Answer({
	text: "good",
	nextQuestion: vegetarian
});
greeting.options = [greatAnswer, goodAnswer];

var yesVegeAnswer = new Answer({
	text: "Yes. I'm vegetarian.",
	nextQuestion: cheese
});
var noVegeAnswer = new Answer({
	text: "No. I eat meat",
	nextQuestion: cheese
});
vegetarian.options = [yesVegeAnswer, noVegeAnswer];

var yesCheeseAnswer = new Answer({
	text: "Yes to cheese.",
	nextQuestion: time
});
var noCheeseAnswer = new Answer({
	text: "No to cheese.",
	nextQuestion: time
});
cheese.options = [yesCheeseAnswer, noCheeseAnswer];

var lessThirtyAnswer = new Answer({
	text: "Less than 30 minutes",
	nextQuestion: null
});
var moreThirtyAnswer = new Answer({
	text: "More than 30 minutes",
	nextQuestion: null
});
time.options = [lessThirtyAnswer, moreThirtyAnswer];

// saving answers to db
goodAnswer.save();
greatAnswer.save();
yesVegeAnswer.save();
noVegeAnswer.save();
yesCheeseAnswer.save();
noCheeseAnswer.save();
lessThirtyAnswer.save();
moreThirtyAnswer.save();

// saving questions to db
greeting.save();
vegetarian.save();
cheese.save();
time.save();

// find the first question in Mongo

Question.findOne({
		startQuestion: true
	})
	.populate('options')
	.exec(function(err, first) {
		if (err) return console.error(err);

		var options = first.options;
		console.log(first.text);
		for (i = 0; i < options.length; i++) {
			// find the next question by its ID
			var nextId = options[i].nextQuestion;
			Question.findOne({
				_id: nextId
			})
			.populate('options')
			.exec(function(err, nextQuestion) {
				console.log(nextQuestion.text);
			});
		}
	});

// GET API route for questions with query start = true, /api/questions?start=true 
// GET API route for res.json(first)  and res.json(found)  api/questions/:id
// Node server, express set up, 
// Get it working in postman
// GET /  res.render html page





// but find next question, based on attribute nextQuestion

console.log("got to end of the script");