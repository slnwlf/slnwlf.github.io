// Example implementation of question and answer decision models

var mongoose = require('mongoose');
console.log("connecting to mongo");
mongoose.connect('mongodb://localhost/relationTest');

var Schema = mongoose.Schema;

// test - create question schema and answer schema
var questionSchema = new Schema({
	text: String,
	options: [{
		type: Schema.Types.ObjectId,
		ref: 'Answer'
	}]
});

var answerSchema = new Schema({
	text: String,
	nextQuestion: {
		type: Schema.Types.ObjectId,
		ref: 'Question'
	}
});

// adding the models that reference the schema
var Question = mongoose.model('Question', questionSchema);
var Answer = mongoose.model('Answer', answerSchema);

// Testing a sample question against the schema / model
var testQuestion = new Question({
	text: "what time is it?"
});
testQuestion.save(function (err, testQuestion) {
	if (err) return console.error(err);

	console.log(testQuestion);
});

// adding a test answer
var testAnswer = new Answer({
	text: "yes",
	nextQuestion: testQuestion
});
testAnswer.save(function (err, testAnswer) {
	if (err) return console.error(err);
	console.log(testAnswer);
});

// This closes the connection so it goes last
console.log("close server with control + c");