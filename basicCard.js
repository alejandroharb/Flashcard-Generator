var BasicCard = function(question, answer) {
	this.question = question,
	this.answer = answer
}

//Basic Card data for Storing in mysql
BasicCard.prototype.store_data = function(question, answer) {
	//storing into basicCard table of database
	connection.query("INSERT INTO basicCards SET ?",[{
		question: question
	},{
		answer: answer
	}], function(err,res) {
			if (err) throw err;
			connection.end();
		});
}


module.exports = BasicCard;