var eventEmitter = function() {
	this.registeredEmissions = {};
}
eventEmitter.prototype.on = function(message, func) {
	if(this.registeredEmissions.hasOwnProperty(message)) {
		this.registeredEmissions[message].push(func);
	} else {
		this.registeredEmissions[message] = [func];	
	}
};
eventEmitter.prototype.emit= function(message, data) {
	if(!this.registeredEmissions.hasOwnProperty(message)) return; //throw new Error('not registered '+message);
	var args = [].slice.call(arguments);
	args.shift();
	console.log(args);
	this.registeredEmissions[message].forEach(function(func) {
		func.apply(func, args);	
	});
};
eventEmitter.prototype.removeListener = function(message, deleteMe) {
	this.registeredEmissions[message] = this.registeredEmissions[message].filter(function(regi) {
		return regi !== deleteMe;
	});
}

module.exports = eventEmitter;
