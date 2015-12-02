// Create a tree that has questions pointing to other questions
console.log("dbTreeTest script file is running.");

var mongoose = require('mongoose');
console.log("connecting to Mongo.");
mongoose.connect('mongodb://localhost/relationTest');

var Schema = mongoose.Schema;

// Create question and answer schemas that don't conflict with other scripts
var questionSchema = new Schema({
	text: String,
	options: [{
		type: Schema.Types.ObjectId,
		ref: 'Answer'
	}]
});
var answerSchema = new Schema({
	text: String,
	nextQuestion: [{
		type: Schema.Types.ObjectId,
		ref: 'Question'
	}]
});
// Adding models that reference the schema
var Question = mongoose.model('Question', questionSchema);
var Answer = mongoose.model('Answer', answerSchema);

// Create questions
var greeting = new Question({
	text: "How are you doing today?"
});
var ready = new Question({
	text: "Ready to get started?"
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
	nextQuestion: ready
});
var goodAnswer = new Answer({
	text: "good",
	nextQuestion: ready
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
ready.options = [yesVegeAnswer, noVegeAnswer];

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
goodAnswer.save(function (err, goodAnswer) {
	if (err) return console.error(err);
	console.log(goodAnswer);
});
greatAnswer.save(function (err, greatAnswer) {
	if (err) return console.error(err);
	console.log(greatAnswer);
});
yesVegeAnswer.save(function (err, yesVegeAnswer) {
	if (err) return console.error(err);
	console.log(yesVegeAnswer);
});
noVegeAnswer.save(function (err, noVegeAnswer) {
	if (err) return console.error(err);
	console.log(noVegeAnswer);
});
yesCheeseAnswer.save(function (err, yesCheeseAnswer) {
	if (err) return console.error(err);
	console.log(yesCheeseAnswer);
});
noCheeseAnswer.save(function (err, noCheeseAnswer) {
	if (err) return console.error(err);
	console.log(noCheeseAnswer);
});
lessThirtyAnswer.save(function (err, lessThirtyAnswer) {
	if (err) return console.error(err);
	console.log(lessThirtyAnswer);
});
moreThirtyAnswer.save(function (err, moreThirtyAnswer) {
	if (err) return console.error(err);
	console.log(moreThirtyAnswer);
});

// saving questions to db
greeting.save(function (err, greeting) {
	if (err) return console.error(err);

	console.log(greeting);
});
ready.save(function (err, ready) {
	if (err) return console.error(err);

	console.log(ready);
});
vegetarian.save(function (err, vegetarian) {
	if (err) return console.error(err);

	console.log(vegetarian);
});
cheese.save(function (err, cheese) {
	if (err) return console.error(err);

	console.log(cheese);
});
time.save(function (err, time) {
	if (err) return console.error(err);

	console.log(time);
});
console.log("got to end of script");