var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// setting up a GET route for the directory / root level
app.get('/', function(req, res) {
	res.render('index.hbs');
});

app.use(express.static('public'));
app.set('view engine', 'hbs');

// Create a tree that has questions pointing to other questions
var mongoose = require('mongoose');
console.log("connecting to Mongo.");
mongoose.connect(
	process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/relationTest'
);

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
app.get('/api/questions', function(req, res) {
	// TODO check for parameter start=true
	Question.findOne({
			startQuestion: true
		})
		.populate('options')
		.exec(function(err, first) {
			if (err) return console.error(err);
			// The GET route responds with the json (object) of the first question
			res.json(first);
		});
	// put inside call back function - in the question
});
//GET route that gets a question by ID
app.get('/api/questions/:id', function(req, res) {
	var currentId = req.params.id;
	Question.findOne({
			_id: currentId
		})
		.populate('options')
		.exec(function(err, found) {
			if (err) return console.error(err);
			res.json(found);
		});
});



// GET API route for questions with query start = true, /api/questions?start=true 

// GET API route for res.json(first)  - done - tested in postman

// GET API route and res.json(found)  api/questions/:id - done - tested in postman

// GET /  res.render html page - done - localhost:3000 is working

// How connect these routes to front end?

// Rename API routes so they are more logical /



// Point to localhost: 3000
var server = app.listen(process.env.PORT || 3000, function() {
	console.log("listening!");
});