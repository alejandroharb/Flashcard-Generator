var ClozeCard = function(question, omitted) {
	var str = question;
	str = str.split(' ');
	blank = omitted.replace(/[\W\w]/gi, "_");
	//DO THIS WITH SUBSTRING METHOD!!!----------
	for(var i = 0; i < str.length; i++) {
		if( str[i] === omitted) {
			str[i] = blank;
		}
	}
	this.question = str.join(" ");
	this.answer = omitted;
}
ClozeCard.prototype.display_answer = function() {
	return this.answer;s
}
var example = new ClozeCard("The president of Bolivia is Evo Morales", "Morales");

console.log(example.display_answer());