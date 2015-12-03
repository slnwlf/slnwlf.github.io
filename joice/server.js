var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var handlebars = require('handlebars');

// setting up a GET route for the directory / root level
app.get('/', function (req, res) {
	res.render('index.hbs');
});

// setting up a GET route for the questions, but questions is not a variable? //
app.get('/api/questions', function (req, res) {
	res.json({ test: true });
	// put inside call back function - in the question
});

app.use(express.static('public'));
app.set('view engine', 'hbs');

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

// GET route that gets the first question
app.get('/api/start', function (req, res) {
Question.findOne({
		startQuestion: true
	})
	.populate('options')
	.exec(function(err, first) {
		if (err) return console.error(err);

		res.json(first);
	});
	// put inside call back function - in the question
});

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

// Get it working in postman
// GET /  res.render html page







// Point to localhost: 3000
var server = app.listen(process.env.PORT || 3000, function () {
	console.log("listening!");
});
