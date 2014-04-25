
/*
 * GET home page.
 */
var Poll = require('../model/Poll.js');

exports.index = function(req, res){
  res.render('index', { title: 'Bibliothek' });
};

exports.list = function(req, res) {

};

exports.poll = function(req, res) {

};

exports.create = function(req, res) {
	var reqBody = req.body,
		choices = reqBody.choices.filter(function(v) { return v.text != '';}),
		pollObj = { question : reqBody.question, choices: choices};
	
	var poll = new Poll.poll(pollObj);
	Poll.savePoll(poll);
};