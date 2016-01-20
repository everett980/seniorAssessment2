var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	body: {type: String, required: true},
	subject: {type: String, required: true, default: 'No Subject' },
	to: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
	from: {type: mongoose.Schema.ObjectId, ref: 'User', required: true}
});

schema.statics.getAllWhereSender = function(givenId) {
	return Message.find({from: givenId}).populate('to from');
}
schema.methods.truncateSubject = function(charCount, ell) {
	var returnString = this.subject.substring(0, charCount);
	if(ell) returnString += '...';
	return {
		body: this.body,
			subject: returnString,
			to: this.to,
			from: this.from
	}
}
var Message = mongoose.model('Message', schema);
module.exports = Message;
