var dburl = '192.168.21.55/bibliothek';
var collections = ['polls'];
var db = require('mongojs').connect(dburl, collections);

db.polls.ensureIndex({question:1}, {unique : true});

module.exports = {
	poll: function(question, choices) {
			this.question = question;
			this.choices = choices;
	},
	
	bar: function savePoll(poll) {
			db.polls.save(poll, function(err, savedPoll) {
				if( err || !savedPoll) {
					console.log("Unable to save poll due to error:" + err);
				} else {
				console.log("Poll " + poll.question + "saved.");
				}
		});
	}
};

