var router = require('express').Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function(req, res, next) {
	User.find().then(function(users) {
		res.send(users);
	});
});

router.put('/:id', function(req, res, next) {
	User.update(req.params.id, req.body).then(function(updated) {
		res.status(201).send(updated);
	});
});

module.exports = router;
