var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Message = mongoose.model('Message');

router.get('/to/:id', (req, res, next) => {
	Message.find({to: req.params.id}).populate('to from').then(function (messages) {
		res.send(messages);
	});
});

router.get('/from/:id', (req, res, next) => {
	Message.getAllWhereSender(req.params.id).then(function(matches) {
		res.send(matches)
	});
});

router.post('/', (req, res, next) => {
	Message.create(req.body).then(function(whatever) {
		res.status(201).send(whatever);
	});
});

module.exports = router;
