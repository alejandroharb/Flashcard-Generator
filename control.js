var basicCard = require('./basicCard.js');
var clozeCard = require('./clozeCard.js');
var keys = require('./keys.js');
var mysql = require('mysql');

//MySQL connection with private key access
var mysqlUser = keys.mysqlKey.user;
var mysqlPass = keys.mysqlKey.password;
var mysqlDB = keys.mysqlKey.database;
var connection = mysql.createConnection({
	host: 'localhost',
	user: mysqlUser,
	password: mysqlPass,
	database: mysqlDB
});


//user enters BASIC CARD flashcard data, upload to MySQL
$('#basicFlashcardSubmit').on('click',function() {
	//stores question and answer from user input
	var question = $('#questionInput').val().trim();
	var answer = $('#answerInput').val().trim();
	//creates variable from constructor holding Q&A from user
	var newBasicCard = new BasicCard(question,answer);
	//runs store_data method that stores data in mysql database
	newBasicCard.store_data(question, answer);
	//prevent page reload 
	return false;
});

//user enters CLOZE CARD flashcard data, upload to MySQL
$('#clozeFlashcardSubmit').on('click',function() {
	//stores question and answer from user input
	var question = $('#questionInput').val().trim();
	var answer = $('#answerInput').val().trim();
	//creates variable from constructor holding Q&A from user
	var newClozeCard = new ClozeCard(question,answer);
	//runs store_data method that stores data in mysql database
	newClozeCard.store_data(question, answer);
	//prevent page reload 
	return false;
});

