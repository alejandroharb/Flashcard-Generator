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

//user enters flashcard data, upload to MySQL
$('#basicFlashcardSubmit').on('click',function() {
	var basicCardQuestion = $('#questionInput').val().trim();
	var basicCardAnswer = $('#answerInput').val().trim();

	connection.query("INSERT INTO basicCards SET ?",[{
			question: basicCardQuestion
		},{
			answer: basicCardAnswer
		}], function(err,res) {
				if (err) throw err;
				connection.end();
			});


});

//constructor organizes data for export to backend
var BasicCardData = function(basicCardQuestion, basicCardAnswer) {
	this.question = basicCardQuestion;
	this.answer = basicCardAnswer;
}